import os
import bibtexparser

# Paths
bib_file_path = 'static/publications/pubs.bib'
html_template_path = 'static/templates/index_template.html'
output_html_path = 'index.html'
meta_dir_path = 'static/meta'  # Directory where the text files are located

# Read and parse the .bib file
with open(bib_file_path, 'r') as bib_file:
    bib_data = bibtexparser.load(bib_file)

# Sort publications by year
publications = sorted(bib_data.entries, key=lambda x: int(x.get('year', '0')), reverse=True)

# Read the HTML template
with open(html_template_path, 'r') as html_file:
    html_template = html_file.read()

# Generate publication cards with numbering
cards_html = ""
for i, publication in enumerate(publications, start=1):
    title = publication.get('title', 'No Title')
    authors = publication.get('author', 'Unknown Authors')
    year = publication.get('year', 'Unknown Year')
    journal_or_conference = publication.get('journal', publication.get('booktitle', None))
    journal_or_conference = journal_or_conference or publication.get("note") or "arXiv"
    if "arXiv" in str(journal_or_conference):
        journal_or_conference = "arXiv"
        
    cards_html += f'''
    <div class="card" id="publication-project-{i}">
        <h3>({i}/{len(publications)}) {title}</h3> <!-- Number the publication -->
        <p><strong>Authors:</strong> {authors}</p>
        <p><strong>Year:</strong> {year}</p>
        <p><strong>Published at {journal_or_conference}</strong></p>
    </div>
    '''

# Replace the placeholder with the actual cards HTML
html_output = html_template.replace('<div class="project-card">', f'<div class="project-card">\n{cards_html}')

# Function to read text from a file
def read_text_file(file_path):
    with open(file_path, 'r') as file:
        return file.read().strip()

# Read meta files and fill the sidebar
contact_info = {
    'discord': read_text_file(os.path.join(meta_dir_path, 'discord.txt')),
    'email': read_text_file(os.path.join(meta_dir_path, 'email.txt')),
    'github': read_text_file(os.path.join(meta_dir_path, 'github.txt')),
    'linkedin': read_text_file(os.path.join(meta_dir_path, 'linkedin.txt')),
    'twitter': read_text_file(os.path.join(meta_dir_path, 'twitter.txt')),
    'google_scholar': read_text_file(os.path.join(meta_dir_path, 'google_scholar.txt'))
}

# Create the sidebar HTML with clickable icons and names
sidebar_html = f'''
<style>
    .icon-container {{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin-bottom: 20px;
    }}
    .icon-row {{
        display: flex;
        gap: 20px;
        margin-bottom: 30px;
    }}
    .icon {{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #f4f4f4;
        color: #333;
        font-size: 28px;
        line-height: 60px;
        text-align: center;
        transition: background-color 0.3s, color 0.3s;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        flex: 1;
        box-sizing: border-box;
    }}
    .icon a {{
        color: inherit;
        text-decoration: none;
    }}
    .icon:hover {{
        background-color: #007bff; /* Blue background for hover effect */
        color: #fff; /* White text color for better contrast */
    }}
    .icon p {{
        margin-top: -15px;
        padding: 0px 0;
        font-size: 12px;
    }}
</style>

<h2>Contact</h2>
<div class="icon-container">
    <div class="icon-row">
        <div class="icon"><a href="https://discord.gg/{contact_info['discord']}" target="_blank"><i class="fab fa-discord"></i></a><p>Discord</p></div>
        <div class="icon"><a href="mailto:{contact_info['email']}"><i class="fas fa-envelope"></i></a><p>Email</p></div>
        <div class="icon"><a href="{contact_info['github']}" target="_blank"><i class="fab fa-github"></i></a><p>GitHub</p></div>
    </div>
    <div class="icon-row">
        <div class="icon"><a href="{contact_info['linkedin']}" target="_blank"><i class="fab fa-linkedin"></i></a><p>LinkedIn</p></div>
        <div class="icon"><a href="{contact_info['twitter']}" target="_blank"><i class="fab fa-twitter"></i></a><p>Twitter</p></div>
        <div class="icon"><a href="{contact_info['google_scholar']}" target="_blank"><i class="fas fa-book"></i></a><p>Scholar</p></div>
    </div>
</div>
'''

# Replace the sidebar placeholder with the actual sidebar HTML
html_output = html_output.replace('<div class="sidebar">', f'<div class="sidebar">\n{sidebar_html}')

# Replace the placeholder in the about tab with the actual about me content
about_me = read_text_file(os.path.join(meta_dir_path, 'aboutme.txt'))
html_output = html_output.replace(
    '<div class="tab-content" id="about" style="display:none;">',
    f'<div class="tab-content" id="about" style="display:none;">\n<h3>About Me</h3>\n<p>{about_me}</p>'
)

# Write the updated HTML to the output file
with open(output_html_path, 'w') as output_file:
    output_file.write(html_output)

print(f"Generated HTML file: {output_html_path}")
