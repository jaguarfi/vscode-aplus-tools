# Aplus Tools

Aplus Tools is a Visual Studio Code extension designed to facilitate the creation or editing of course content published
on the [A+ platform](https://plus.cs.aalto.fi/). This extension eases the use of the markup language used to created
courses in A+, which is [reStructuredText](https://docutils.sourceforge.io/rst.html). In addition, this extension allows
you to preview the current reStructuredText file within the editor, to spot syntax errors inside the reStructuredText
files, and to organise folders and files by using icons.

This extension is aimed at teachers, instructors, course assistants and anyone interested in creating courses in A+.
Never the extension can be used for anyone interested on writing reStructuredText.

## Features

### RestructuredText

Specific features of the [RestructuredText extension][restructuredtext]
- Syntax Highlighting
- Code Snippets
- Live Preview
- Section Builder
- Linter
- IntelliSense (Experimental)

### Material Folder icon

Specific features of the [Material Icon Theme extension][Material Icon Theme]

- Adorns the "document tree display" with icons.

### Aplus Tools

Specific features of [Aplus Tools extension](https://github.com/jaguarfi/vscode-aplus-tools)

- Tasks Provider

  You can compile your course material using [tasks](https://code.visualstudio.com/docs/editor/tasks). Press
  `Ctrl+Shift+B` or run **Run Build Task** from the global **Terminal** menu. The first time you run this command, you
  should press **Enter** to configure the new build task. After pressing enter, you will see the **build: aplustools**
  option in your prompt, select the **build: aplustools** option.

  After configuring the default task, you will be able to compile the course by Pressing`Ctrl+Shift+B`.

- Snippets

  | Snippet               | Description                                                                 |
  | --------------------- | --------------------------------------------------------------------------- |
  | ap-styled-topic       | https://github.com/apluslms/a-plus-rst-tools#15-css-styled-topics           |
  | ap-annotated-code     | https://github.com/apluslms/a-plus-rst-tools#10-annotated-code-blocks       |
  | ap-tab                |                                                                             |
  | ap-active elements    | https://github.com/apluslms/a-plus-rst-tools#6-active-element-input         |
  | ap-pick-questionaire  | https://github.com/apluslms/a-plus-rst-tools#1-graded-questionnaire         |
  | ap-free-questionnaire | https://github.com/apluslms/a-plus-rst-tools#1-graded-questionnaire         |
  | ap-submittable        | https://github.com/apluslms/a-plus-rst-tools#3-submittable-exercise         |
  | ap-lti                | https://github.com/apluslms/a-plus-rst-tools#4-external-exercise-lti        |
  | ap-aplusmeta          | https://github.com/apluslms/a-plus-rst-tools#5-meta-exercise-round-settings |
  | ap-hidden-block       | https://github.com/apluslms/a-plus-rst-tools#8-hidden-block                 |
  | ap-point-of-interest  | https://github.com/apluslms/a-plus-rst-tools#9-point-of-interest            |
  | ap-html-div           | https://github.com/apluslms/a-plus-rst-tools#14-html-div-elements           |
  | ap-youtube            | https://github.com/apluslms/a-plus-rst-tools#16-media-directives            |
  | ap-embedded-page      | https://github.com/apluslms/a-plus-rst-tools#16-media-directives            |
  | ap-story              | https://github.com/apluslms/a-plus-rst-tools#16-media-directives            |

  #### reStructuredText

  | Snippet                 | Description                                                                              |
  | ----------------------- | ---------------------------------------------------------------------------------------- |
  | ap-image                | https://docutils.sourceforge.io/docs/ref/rst/directives.html#image                       |
  | ap-figure               | https://docutils.sourceforge.io/docs/ref/rst/directives.html#figure                      |
  | ap-structured-reference | https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#hyperlink-references  |
  | ap-link                 | https://docutils.sourceforge.io/docs/ref/rst/restructuredtext.html#standalone-hyperlinks |
  | ap-attention            | https://docutils.sourceforge.io/docs/ref/rst/directives.html#specific-admonitions        |
  | ap-note                 | https://docutils.sourceforge.io/docs/ref/rst/directives.html#specific-admonitions        |
  | ap-warning              | https://docutils.sourceforge.io/docs/ref/rst/directives.html#specific-admonitions        |
  | ap-error                | https://docutils.sourceforge.io/docs/ref/rst/directives.html#specific-admonitions        |
  | ap-hint                 | https://docutils.sourceforge.io/docs/ref/rst/directives.html#specific-admonitions        |
  | ap-important            | https://docutils.sourceforge.io/docs/ref/rst/directives.html#specific-admonitions        |
  | ap-caution              | https://docutils.sourceforge.io/docs/ref/rst/directives.html#specific-admonitions        |
  | ap-danger               | https://docutils.sourceforge.io/docs/ref/rst/directives.html#specific-admonitions        |
  | ap-tip                  | https://docutils.sourceforge.io/docs/ref/rst/directives.html#specific-admonitions        |
  | ap-admonition           | https://docutils.sourceforge.io/docs/ref/rst/directives.html#generic-admonition          |
  | ap-sidebar              | https://docutils.sourceforge.io/docs/ref/rst/directives.html#sidebar                     |
  | ap-rubric               | https://docutils.sourceforge.io/docs/ref/rst/directives.html#rubric                      |
  | ap-epigraph             | https://docutils.sourceforge.io/docs/ref/rst/directives.html#epigraph                    |
  | ap-math-role            | https://docutils.sourceforge.io/docs/ref/rst/roles.html#math                             |
  | ap-math-directive       | https://docutils.sourceforge.io/docs/ref/rst/directives.html#math                        |

  #### Sphinx

  | Snippet           | Description                                                                               |
  | ----------------- | ----------------------------------------------------------------------------------------- |
  | ap-code-block     | https://www.sphinx-doc.org/en/1.7/markup/code.html#directive-code-block                   |
  | ap-literalinclude | https://www.sphinx-doc.org/en/1.7/markup/code.html#directive-literalinclude               |
  | ap-doc            | https://www.sphinx-doc.org/en/1.7/markup/inline.html?highlight=doc#role-doc               |
  | ap-ref            | https://www.sphinx-doc.org/en/1.7/markup/inline.html?highlight=doc#role-ref               |
  | ap-label          | https://www.sphinx-doc.org/en/1.7/markup/inline.html?highlight=doc#role-ref               |
  | ap-download       | https://www.sphinx-doc.org/en/1.7/markup/inline.html?highlight=doc#role-download          |
  | ap-numref         | https://www.sphinx-doc.org/en/1.7/markup/inline.html?highlight=doc#role-numref            |
  | ap-command        | https://www.sphinx-doc.org/en/1.7/markup/inline.html?highlight=command#role-command       |
  | ap-file           | https://www.sphinx-doc.org/en/1.7/markup/inline.html?highlight=command#role-file          |
  | ap-keyboard       | https://www.sphinx-doc.org/en/1.7/markup/inline.html?highlight=command#role-kbd           |
  | ap-menuselection  | https://www.sphinx-doc.org/en/1.7/markup/inline.html?highlight=command#role-menuselection |

  #### Local

  | Snippet     | Description                                                                                                                                                                                  |
  | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | ap-readmore | You can find information about this in the [config.py](https://github.com/apluslms/course-templates/blob/57ac4208886f759772ff0e40135d301c2dff3159/conf.py#L48) file of your course template. |

### Included Extensions

| Extension             | Description                                                       | Stats                                                                                                              |
| --------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [lexstudio.restructuredtext][restructuredtext]   | provides a set of tools to visualise and debug your `.rst` files. | [![GitHub issues][1]][2] [![GitHub stars][3]][4] [![Build Status][5]][6] [![Current Version][7]][restructuredtext] |
| [Pkief.material-icon-theme][Material Icon Theme] | is basically a visual extension that add icons to the folders.    | [![GitHub issues][8]][9] [![GitHub stars][10]][11] [![GitHub license][12]][13]                                     |

[restructuredtext]: https://marketplace.visualstudio.com/items?itemName=lextudio.restructuredtext
[material icon theme]: https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
[1]: https://img.shields.io/github/issues/vscode-restructuredtext/vscode-restructuredtext
[2]: https://github.com/vscode-restructuredtext/vscode-restructuredtext/stargazers
[3]: https://img.shields.io/github/stars/vscode-restructuredtext/vscode-restructuredtext
[4]: https://github.com/vscode-restructuredtext/vscode-restructuredtext/issues
[5]: https://img.shields.io/azure-devops/build/lextudio/vscode-restructuredtext/2/master.svg
[6]: https://dev.azure.com/lextudio/vscode-restructuredtext/_build/latest?definitionId=2&branchName=master
[7]: https://img.shields.io/visual-studio-marketplace/v/lextudio.restructuredtext.svg
[8]: https://img.shields.io/github/issues/PKief/vscode-material-icon-theme
[9]: https://github.com/PKief/vscode-material-icon-theme/issues
[10]: https://img.shields.io/github/stars/PKief/vscode-material-icon-theme
[11]: https://github.com/PKief/vscode-material-icon-theme/stargazers
[12]: https://img.shields.io/github/license/PKief/vscode-material-icon-theme
[13]: https://github.com/PKief/vscode-material-icon-theme/blob/master/LICENSE.md

## Requirements

This extension requires Visual Studio Code version >=1.43.0, and python version >=3.5 and Sphinx version 1.7. More
information on how to set up your environment can be found on the [Getting Started](#getting-started) section. It is
important to remember that this extension is highly related to the Aplus course template project. Therefore, you must
also comply with the requirements mentioned in the [A+ documentation](https://apluslms.github.io/guides/quick/#requirements).

## Getting Started

1. [Install the extension and reload VS Code](https://code.visualstudio.com/docs/editor/extension-gallery). Remember,
   the name of the extension is Aplus tools.
2. Open your course project, create a Python virtual environment for your course, and switch to the new virtual
   environment you have just created.

   ```sh
   aptdcon --install python3-venv
   python3 -m venv venv_aplus
   source venv_aplus/bin/activate
   ```

   > ### 📘 Info
   >
   > Remember to use your virtual environment every time you open your course project.

3. Install the following Python libraries inside your virtual environment

   ```sh
   pip install sphinx==1.6.7 sphinx-autobuild==0.7.1
   pip install rstcheck
   ```

4. Create a `.rstcheck` file and add the desired [configurarion](https://pypi.org/project/rstcheck/#options). For
   example:
   ```
   [rstcheck]
   report = warning
   ignore_roles =
       important,
       raw-html,
       glyphicon-info-sign,
       glyphicon-console
   ignore_directives =
       styled-topic,
       div,
       point-of-interest,
       annotated,
       questionnaire,
       submit,
       acos-submit,
       ae-input,
       ae-output,
       hidden-block,
       youtube,
       embedded-page,
       aplusmeta,
       content-tabs
   ignore_substitutions =
       today,
       Aplus
   ```
5. One more thing you want to set up is your `config.py` file inside your course project. If you want to avoid unnecessary
   compilation of the libraries, you should add the name of the folder where your virtual environment is located. For
   example:

   ```sh
   exclude_patterns = ['_build', 'exercises/solutions', '_data', 'enrollment', 'venv_aplus']
   ```

   > ### 📘 Info
   >
   > Remember to add the `venv_aplus` folder also to your `.gitignore`

## Issues, requests and contributions

If you come across a problem with the extension or you want to request a new feature, please
[file an issue](https://github.com/jaguarfi/vscode-aplus-toolsCONTRIBUTING.md#issues). On the contrary, if you want to
solve an existing issue, you can [create a pul request](https://github.com/jaguarfi/vscode-aplus-tools/pulls).

Contributions are always welcome!. Please check the [contributing guide](CONTRIBUTING.md)

---

### For more information

- [Aplus Tools Documentation](./docs/index.md)
- [A+ Manual](https://plus.cs.aalto.fi/aplus-manual/master/)
- [Contact Us](mailto:aplusguru@aalto.fi)


