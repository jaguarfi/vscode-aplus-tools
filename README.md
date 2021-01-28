# Aplus Tools

Aplus Tools is a Visual Studio Code extension designed to facilitate the creation or editing of course content published
on the [A+ platform](https://plus.cs.aalto.fi/). This extension eases the use of the
[reStructuredText](https://docutils.sourceforge.io/rst.html) language used to created courses in A+. In addition, this
extension allows you to preview the current reStructuredText file within the editor, to spot syntax errors inside the
reStructuredText files, and to organise folders and files by using icons.

This extension is aimed at teachers, instructors, course assistants and anyone interested in creating courses in A+.
Never the extension can be used for anyone interested on writing reStructuredText.

## Requirements

This extension requires Visual Studio Code version `>=1.47.3`, python version `>=3.5` and Sphinx version `1.6.7`. More
information on how to set up your environment can be found on the [Getting Started](#getting-started) section.

It is important to remember that this extension is highly related to the Aplus course template project. Therefore, you must
also comply with the requirements mentioned in the [A+ documentation](https://apluslms.github.io/guides/quick/#requirements).

## Getting Started

1. [Install the extension and reload VS Code if required](https://marketplace.visualstudio.com/items?itemName=apluslms.aplus-tools-official).
   Remember, the name of the extension is Aplus-tools.
2. Open your course project, create a Python virtual environment for your course, and switch to the new virtual
   environment you have just created.

   ```sh
   aptdcon --install python3-venv
   python3 -m venv .venv_aplus
   source .venv_aplus/bin/activate
   pip install --upgrade pip setuptools
   pip install wheel
   ```

   It is recommended that you install the [Python extension by Microsoft](https://marketplace.visualstudio.com/items?itemName=ms-python.python).
   It really makes configuring the Python environment easier,since you can select the python environment from the Status
   Bar.

   ### 📘 Info

   Remember to activate your virtual environment every time you open your course in Vs Code.

3. Install the following Python libraries inside your virtual environment

   ```sh
   pip install sphinx==1.6.7
   pip install sphinx-autobuild==0.7.1
   pip install rstcheck
   ```

4. Press `CTRL+Shift+P` to open the **Command Palette**. Then type `Preferences: Open workspace settings (JSON)` this
   will create an empty JSON file called **.vscode/settings.json**. Open the file and copy the following snippet of code.

   ```
   {
       "restructuredtext.confPath": "${workspaceFolder}",
       "restructuredtext.linter.run": "onSave",
       "restructuredtext.linter.name": "rstcheck"
   }
   ```

   ### ⚠️ Warning

   If you changed the name of the virtual enviroment folder in the step 2, you must change the value of
   `"restructuredtext.confPath":` as well. Otherwise, VS Code will not find the Python interpreter or will use the
   wrong one.

5. Create a `.rstcheck.cfg` file and add the desired [configuration](https://pypi.org/project/rstcheck/#options). You can
   start with the following options:
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
6. One more thing you want to set up is your `conf.py` file inside your course project. If you want to avoid unnecessary
   compilation of the libraries, you should add the name of the folder where your virtual environment is located
   (**.venv_aplus**) to the `exclude_patterns` array. If you followed the instructions to the letter, your code should
   look something like this:

   ```sh
   exclude_patterns = ['_build', 'exercises/solutions', '_data', 'enrollment', '.venv_aplus']
   ```

   ### 📘 Info

   Remember to add the `.venv_aplus` folder to `.gitignore` file.

## Features

### RestructuredText

Specific features of the [RestructuredText extension][restructuredtext]

- Syntax Highlighting
- Live Preview
  Use the following shortcuts to use the Live Preview

  - `Ctrl+Shift+R` to open the in a new tab Preview
  - `Ctrl+K Ctrl+R` to open the Preview in a new Editor Group

- Section Builder
- Linter
- IntelliSense (Experimental)

### Material Folder icon

Specific features of the [Material Icon Theme extension][material icon theme]

- Adorns the "document tree display" with icons.

### Aplus Tools

Specific features of [Aplus Tools extension](https://github.com/apluslms/vscode-aplus-tools)

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

  | Snippet     | Description                                                                                                                                                                                |
  | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | ap-readmore | You can find information about this in the [conf.py](https://github.com/apluslms/course-templates/blob/57ac4208886f759772ff0e40135d301c2dff3159/conf.py#L48) file of your course template. |

### Included Extensions

| Extension                                        | Description                                                       | Stats                                                                          |
| ------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [lexstudio.restructuredtext][restructuredtext]   | provides a set of tools to visualise and debug your `.rst` files. | [![GitHub issues][1]][2] [![GitHub stars][3]][4] [![Build Status][5]][6]       |
| [Pkief.material-icon-theme][material icon theme] | is basically a visual extension that add icons to the folders.    | [![GitHub issues][8]][9] [![GitHub stars][10]][11] [![GitHub license][12]][13] |

[restructuredtext]: https://marketplace.visualstudio.com/items?itemName=lextudio.restructuredtext
[material icon theme]: https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
[1]: https://img.shields.io/github/issues/vscode-restructuredtext/vscode-restructuredtext
[4]: https://github.com/vscode-restructuredtext/vscode-restructuredtext/stargazers
[3]: https://img.shields.io/github/stars/vscode-restructuredtext/vscode-restructuredtext
[2]: https://github.com/vscode-restructuredtext/vscode-restructuredtext/issues
[5]: https://img.shields.io/azure-devops/build/lextudio/vscode-restructuredtext/2/master.svg
[6]: https://dev.azure.com/lextudio/vscode-restructuredtext/_build/latest?definitionId=2&branchName=master
[7]: https://img.shields.io/visual-studio-marketplace/v/lextudio.restructuredtext.svg
[8]: https://img.shields.io/github/issues/PKief/vscode-material-icon-theme
[9]: https://github.com/PKief/vscode-material-icon-theme/issues
[10]: https://img.shields.io/github/stars/PKief/vscode-material-icon-theme
[11]: https://github.com/PKief/vscode-material-icon-theme/stargazers
[12]: https://img.shields.io/github/license/PKief/vscode-material-icon-theme
[13]: https://github.com/PKief/vscode-material-icon-theme/blob/master/LICENSE.md

## Issues, requests and contributions

If you come across a problem with the extension or you want to request a new feature, please
[file an issue](https://github.com/apluslms/vscode-aplus-tools/issues). On the contrary, if you want to
solve an existing issue, you can [create a pull request](https://github.com/apluslms/vscode-aplus-tools/pulls).

Contributions are always welcome!. Please check the [contributing guide](https://github.com/apluslms/vscode-aplus-tools/blob/master/CONTRIBUTING.md)

---

### For more information

- [Aplus Tools Documentation](https://github.com/apluslms/vscode-aplus-tools/blob/master/docs/index.md)
- [A+ Manual](https://plus.cs.aalto.fi/aplus-manual/master/)
- Contact us at <aplusguru@aalto.fi>
