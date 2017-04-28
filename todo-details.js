function todoDetailsController(){
    var ctrl = this;

    ctrl.changeStatus = function(){
        ctrl.onStatusChange({item: ctrl.itemData});
    }

    ctrl.del = function(){
        ctrl.onDelete({item: ctrl.itemData});
    }
}

angular.module('todoApp').component('todoDetails', {
    templateUrl: 'todo-details.html',
    controller: todoDetailsController,
    bindings: {
        itemData: '<',
        onDelete: '&',
        onStatusChange: '&'
    }
});