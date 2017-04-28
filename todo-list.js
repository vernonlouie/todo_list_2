function todoListController(){
    var ctrl = this;

    ctrl.todoList = [
        {
            title: 'Complete Angular Presentation',
            details: 'Finsh the Angular presentation on components',
            due: '11/18/2016',
            status: 'open'
        },
        {
            title: 'Go to Store',
            details: 'Get eggs, milk and bread',
            due: '11/16/2016',
            status: 'open'
        },
        {
            title: 'Clean House',
            details: 'When the kids get home from school make them clean the house',
            due: '11/19/2016',
            status: 'open'
        }
    ];

    ctrl.delete = function(item){
        var index = ctrl.todoList.indexOf(item);

        if(index > -1){
            ctrl.todoList.splice(index, 1);
        }
    }

    ctrl.toggleStatus = function(item){
        item.status = (item.status === 'open') ? 'closed' : 'open';
    }
}

angular.module("todoApp").component("todoList", {
    templateUrl: 'todo-list.html',
    controller: todoListController
});