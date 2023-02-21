# DraftWise Frontend Interview Project

Legal documents usually consist of some terms that are defined in document before being used.
These definitions can either be grouped under a title or distributed around the document.
We want you to write a Word add-in that parses a Word document and gathers these definitions.
App should have two views:
1.  List all definitions in a document
2.  List defined terms that are in currently focused paragraph

For the sake of simlicity, you can consider a paragraph as a definition if it starts with a phrase in quotation marks.
Definitions may consist of more that one paragraph or composed in different styles but we can omit them for this project.
You can find some examples of definitions below:

<img width="600" alt="Definitions" src="https://user-images.githubusercontent.com/9028038/142232878-c4b3e52b-ce34-4b93-8e3e-c3ccbf59f421.png">


For an example usage of definitions in a paragraph, you can refer to following image.
As you can see it includes some of the definitions such as "Corporate Status" and "Expenses".

<img width="600" alt="Paragraph" src="https://user-images.githubusercontent.com/9028038/142232866-1869d873-7722-469f-beb1-da3f8165ad91.png">


## Tasks

- Create a Word task pane add-in. You can use the generator provided by Microsoft. Link to that is listed below.
- Parse document to extract defined terms in a performant manner.
- List all definitions in one view. Make sure that rendering performance is fine.
- Keep track of the paragraph user currently works on and show defined terms in that paragraph in another view.

## Examples

- Get Definitions from the definitions section:
<img width="600" alt="Defsec" src="https://user-images.githubusercontent.com/9028038/142234858-2bdbb634-59c1-4f3f-afb0-191dce25c288.png">

-  every time you click a paragraph, it should check if there is a definition, show the definitions explanation list on the left on the toolbar tab. For example, when you click on this, you should get definitions for "Additional Funding Amount", "Company" and "Shareholder Reserved Matter Notice" on the plugin on the right:

<img width="600" alt="Def" src="https://user-images.githubusercontent.com/9028038/142234810-9b59ddc2-a10c-4877-b033-3905eca0839e.png">

- Two example docs are attached.

## How to run the project?

You'll need to have Microsoft Word to run this project. If you don't, you can create a free account on Microsoft Office 365 and use it.
You can find some guiding information from the links below. Also keep an eye to other pages listed on these pages' side menus.

You can use documents we provide to test your code on them.

If you need help, do not hesitate to contact us.

## Criteria

- We are interested to see you write readable, maintainable code.
- Think this project as a part of a large-scale application while deciding on architectural structure.
- We expect you to use state-of-the-art development techniques.
- We are interested in any performance insights you have. Many of our users use embedded Internet Explorer 11 on relatively low resource Windows VMs, so we care about high performance code.
- We will test your project on Chrome using 6x CPU slowdown.
- Don't forget to write tests for your code.
- Word closes add-on if it becomes unresponsive for 10 seconds. So re-renders shouldn't take too much time.
- We'll also evaluate your design decisions regarding to UX and UI. Feel free to design the app as you wish to make it more usable and attractive.

## Useful resources

- [Build your first Word task pane add-in](https://docs.microsoft.com/en-us/office/dev/add-ins/quickstarts/word-quickstart?tabs=yeomangenerator)
- [Word API reference](https://docs.microsoft.com/en-us/javascript/api/word?view=word-js-preview)
- [Sideload Office Add-ins in Office on the web for testing](https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-office-add-ins-for-testing)
- [Design the UI of Office Add-ins](https://docs.microsoft.com/en-us/office/dev/add-ins/design/add-in-design)
