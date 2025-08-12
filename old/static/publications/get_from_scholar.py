from scholarly import scholarly
import json
from pathlib import Path


def get_scholar_publications(author_id):
    """
    Fetch publications for a given Google Scholar author ID

    Args:
        author_id (str): The Google Scholar author ID

    Returns:
        list: List of publication dictionaries
    """
    try:
        # Search for the author by ID
        author = scholarly.search_author_id(author_id)

        # Fill in all available author data
        author = scholarly.fill(author)

        # Extract publications
        publications = []
        for pub in author["publications"]:
            pub_filled = scholarly.fill(pub)
            publications.append(
                {
                    "title": pub_filled.get("bib", {}).get("title", ""),
                    "authors": pub_filled.get("bib", {}).get("author", []),
                    "year": pub_filled.get("bib", {}).get("pub_year", ""),
                    "venue": pub_filled.get("bib", {}).get("venue", ""),
                    "citations": pub_filled.get("num_citations", 0),
                    "url": pub_filled.get("pub_url", ""),
                }
            )

        return publications

    except Exception as e:
        print(f"Error fetching publications: {str(e)}")
        return []


def save_publications(publications, output_file="publications.json"):
    """
    Save publications to a JSON file

    Args:
        publications (list): List of publication dictionaries
        output_file (str): Path to output JSON file
    """
    output_path = Path(output_file)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(publications, f, indent=2, ensure_ascii=False)


if __name__ == "__main__":
    # Replace with your Google Scholar author ID
    AUTHOR_ID = "YOUR_SCHOLAR_ID"

    publications = get_scholar_publications(AUTHOR_ID)
    if publications:
        save_publications(publications)
        print(f"Successfully saved {len(publications)} publications")
    else:
        print("No publications found or an error occurred")
