# ECOS Website Sources

## Introduction

This repository contains the source files for the ECOS Website, generated with **MkDocs Material + Tailwindcss** as a bilingual site (`web/src/zh` and `web/src/en`) with a lightweight frontend asset pipeline for consistent local preview and production output.

## Usage

Before running commands, make sure your environment has Python 3.10+, Node.js 22+ and Git.

- Setup

  Initialize shared repositories (`res` and `tpl`) and prepare the local project workspace.

  ```bash
  cd web
  make setup
  ```

- Edit

  Please follow the workflow to add new images or videos:

    - Upload lossless original images (JPG or PNG format) or pre-compressed videos (MP4 format) to the corresponding directory under `web/res/img`.
    - Run `make gen-webp` command in the `web` directory, and scripts in `web/tpl` will automatically convert original images to smaller WEBP images (lossy compression).
    - Reference the generated WEBP images in your Markdown files.

  **Note:** running `make gen-webp` command is optional. If you run `make serve-web` command in the next **Preview** step, the system will also convert images automatically. **Video compression is not currently supported by script, so please compress videos in advance before uploading them to `web/res/img`.**

- Preview

  Start a local development server for the Chinese site (default language).

  ```bash
  cd web
  make serve-web
  ```

  Start a local development server for the English site.

  ```bash
  cd web
  make serve-web MKDOCS_LANG=en
  ```

- Build

  Generate dynamic assets and build the Chinese static site output.

  ```bash
  cd web
  make gen-web
  make build-web
  ```

  Generate dynamic assets and build the English static site output.

  ```bash
  cd web
  make gen-web MKDOCS_LANG=en
  make build-web MKDOCS_LANG=en
  ```

- Deploy

  If you modify files in local `web/res` or `web/tpl` (for example, add new images, templates, scripts, or styles), commit and push those changes to their corresponding repositories first.

  Commit and push your changes in `web/src` to the repository. Then Vercel (a cloud platform designed to simplify web development) will detect the update of the repository, automatically build and deploy the website according to `vercel.json` config file.

- Clean

  Remove generated files and local build artifacts for a fresh rebuild.

  ```bash
  cd web
  make clean
  ```
