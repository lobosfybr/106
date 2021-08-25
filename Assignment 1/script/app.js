function createTodo(){
    let text=$(`#textTodo`).val(); //read the text/val from controls
    let syntax = `
    <div class="todo-item">
        <h5>${text}</h5>
        <button onclick="deleteTodo()" id="btnRemove" class="btn btn-sm btn-danger">Remove</button>
    </div>
    `;
    $(`#todoContainer`).append(syntax);

    // clear input field
    $(`#textTodo`).val(``);
    $(`#textTodo`).focus();
}

function deleteTodo() {
    console.log("delete press");
    $(this).remove();
}

function enterKeypress(){
    console.log(`keypress`);
}

function init(){
    // load previous data

    // hook events
    $(`#btnAdd`).click(createTodo);

    $(`#todoContainer`).on(`click`, `.btn-danger`, deleteTodo);

    $(`#textTodo`).keypress(function(args) {
        if(args.key === "Enter"){
            createTodo();
        }
    });
}

window.onload=init;