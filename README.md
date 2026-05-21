# ECOS Website Sources
## Introduction
This repository contains the source files for the ECOS official website, generated with **MkDocs Material** as a bilingual site (`web/src/zh` and `web/src/en`) with a lightweight frontend asset pipeline for consistent local preview and production output.

## Usage
Before running commands, make sure your environment has Python 3.10+, Node.js 22+ and Git.

- Setup

  Initialize shared repositories (`res` and `tpl`) and prepare the local project workspace.

  ```sh
  > cd web
  > make setup
  ```

- Edit

  If you need to add new images or videos in Markdown files, please follow this workflow:

    - Upload lossless original images (JPG or PNG) or pre-compressed videos (MP4) to the corresponding directory under `web/res/img`.
    - Run `make gen-webp` in the `web` directory, and scripts in `web/tpl` will automatically convert original images to smaller WEBP files.
    - Reference the generated WEBP images in your Markdown files.

  Note: running `make gen-webp` is optional. If you run `make serve-web` in the next Preview step, the system will also convert images automatically. Video compression is not currently supported by script, so please compress videos in advance before uploading them to `web/res/img`.

- Preview

  Start a local development server for the Chinese site (default language).

  ```sh
  > cd web
  > make serve-web
  ```

  Start a local development server for the English site.

  ```sh
  > cd web
  > make serve-web MKDOCS_LANG=en
  ```

- Build

  Generate dynamic assets and build the Chinese static site output.

  ```sh
  > cd web
  > make gen-web
  > make build-web
  ```

  Generate dynamic assets and build the English static site output.

  ```sh
  > cd web
  > make gen-web MKDOCS_LANG=en
  > make build-web MKDOCS_LANG=en
  ```

- Deploy

  If you modify files in local `web/res` or `web/tpl` (for example, new images, templates, scripts, or styles), commit and push those changes to their corresponding repositories first.

  Commit and push your changes in `web/src` to this repository. Vercel will then detect the update and automatically build and deploy the website according to `vercel.json`.

- Clean

  Remove generated files and local build artifacts for a fresh rebuild.

  ```sh
  > cd web
  > make clean
  ```
