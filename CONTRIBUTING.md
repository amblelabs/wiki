When you wish to not use the CMS, please read this.

General guidelines:
- When adding content, you'll only need to do it under content/wiki
- When naming files, it must be all lower case and have dashes for space such as: artron-unit.mdx
- When creating a new directory, remember to add a meta.json, example below

This is an example header for an mdx file:
```
---
title: Adaptive Exterior
description: An Adaptive Exterior for hiding near your friend's base as a tree or something
section: tardis
---
```
The header is a necessity of all mdx files.
The only key thing to note here is that section should match the directory of the root mod.
For example, if the mdx file is under content/wiki/ait/misc/dim, the section should be misc, not dim.
This is an example of meta.json:
```
{
  "title": "Miscellaneous",
  "section": "misc",
  "icon": "Shuffle"
}
```
The title is what you wish the full name is, the section is what the mdx header should reference and the icon is whats shown on the sidebar in the wiki.
