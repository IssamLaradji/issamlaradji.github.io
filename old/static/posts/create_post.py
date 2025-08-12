import os
import json


def create_blog_post(template_path, markdown_path):
    # Read the template
    with open(template_path, "r", encoding="utf-8") as f:
        template = f.read()

    # Read the markdown content
    with open(markdown_path, "r", encoding="utf-8") as f:
        markdown_content = f.read()

    # Escape any special characters in the markdown content for JavaScript
    markdown_content = json.dumps(markdown_content)

    # Replace the placeholder with the markdown content
    new_html = template.replace("{your_post_here}", markdown_content)

    # Generate output filename from markdown filename
    output_filename = os.path.splitext(os.path.basename(markdown_path))[0] + ".html"
    output_path = os.path.join(os.path.dirname(template_path), output_filename)

    # Write the new HTML file
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(new_html)

    print(f"Created {output_path}")


# Example usage:
# create_blog_post('static/posts/template.html', 'static/posts/my-post.md')

if __name__ == "__main__":
    name = "ai_health.md"
    create_blog_post("static/posts/template.html", f"static/posts/{name}")
