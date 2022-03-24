## Design Requirements:

We need a single page todo app.

We need a centered white box with a little bit of shadow.

We need a left side panel where we can show the categories.

We need a main area where we've the following:

<ol>
  <li>Heading</li>
  <li>Input box to create new tasks/todos</li>
  <li>List of tasks
    <ol>
    <li>Checkbox</li>
    <li>title</li>
    <li>category</li>
    <li>delete icon</li>
    </ol>
  </li>
</ol>

---

## Components Breakdown:

```
MainComponent ✅
  ContainerComponent/ WhiteBoxComponent ✅
    Sidebar/ LeftPanel Component ✅
    MainSection Component ✅
      Heading Component
      InputBox Component
      TaskList Component
        SingleTask Component
          CheckBox Component
          Name Component
          Category Component
          Trash Component
```
