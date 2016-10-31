(function() {
    'use strict';

    angular.module('webapp').factory('modalWindows', modalService);

    modalService.$inject = ['$uibModal'];

    function modalService($uibModal) {

        function openModal(input, template, size) {
            return $uibModal.open({
                template: template,
                controller: 'ModalController',
                bindToController: true,
                backdrop: "static",
                size: size,
                resolve: {
                    input: function() {
                        if (input) {
                            return input;
                        }
                        return {};
                    }
                }
            });
        }

        return {

            openCreateUser: function() {
                return openModal({},
                    '<div class="modal-header">' +
                    '<button type="button" data-ng-click="close()" data-dismiss="modal" class="btn btn-link close" title="{{\'MODAL_WINDOW_CLOSE\' | translate}}">' +
                    '&times;' +
                    '</button>' +
                    '<h3 class="modal-title">{{"CREATE_USER" | translate}}</h3>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<create-user  ></create-user>' +
                    '</div>' +
                    '<div class="modal-footer"></div>'
                );
            },

            openCreateTodo: function() {
                return openModal({},
                    '<div class="modal-header">' +
                    '<button type="button" data-ng-click="close()" data-dismiss="modal" class="btn btn-link close" title="{{\'MODAL_WINDOW_CLOSE\' | translate}}">' +
                    '&times;' +
                    '</button>' +
                    '<h3 class="modal-title">{{"CREATE_TODO" | translate}}</h3>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<create-todo  ></create-todo>' +
                    '</div>' +
                    '<div class="modal-footer"></div>'
                );
            },

            openEditUser: function(input) {
                return openModal(input,
                    '<div class="modal-header">' +
                    '<button type="button" data-ng-click="close()" data-dismiss="modal" class="btn btn-link close" title="{{\'MODAL_WINDOW_CLOSE\' | translate}}">' +
                    '&times;' +
                    '</button>' +
                    '<h3 class="modal-title">{{"EDIT_USER" | translate}}</h3>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<edit-user  id="input.id" ></edit-user>' +
                    '</div>' +
                    '<div class="modal-footer"></div>'
                );
            },

            openDeleteUser: function(input) {
                return openModal(input,
                    '<div class="modal-header">' +
                    '<button type="button" data-ng-click="close()" data-dismiss="modal" class="btn btn-link close" title="{{\'MODAL_WINDOW_CLOSE\' | translate}}">' +
                    '&times;' +
                    '</button>' +
                    '<h3 class="modal-title">{{"DELETE_USER" | translate}}</h3>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<delete-user  id="input.id" ></delete-user>' +
                    '</div>' +
                    '<div class="modal-footer"></div>'
                );
            },

            openEditTodo: function(input) {
                return openModal(input,
                    '<div class="modal-header">' +
                    '<button type="button" data-ng-click="close()" data-dismiss="modal" class="btn btn-link close" title="{{\'MODAL_WINDOW_CLOSE\' | translate}}">' +
                    '&times;' +
                    '</button>' +
                    '<h3 class="modal-title">{{"EDIT_TODO" | translate}}</h3>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<edit-todo  id="input.id" ></edit-todo>' +
                    '</div>' +
                    '<div class="modal-footer"></div>'
                );
            },

            openDeleteTodo: function(input) {
                return openModal(input,
                    '<div class="modal-header">' +
                    '<button type="button" data-ng-click="close()" data-dismiss="modal" class="btn btn-link close" title="{{\'MODAL_WINDOW_CLOSE\' | translate}}">' +
                    '&times;' +
                    '</button>' +
                    '<h3 class="modal-title">{{"DELETE_TODO" | translate}}</h3>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<delete-todo  id="input.id" ></delete-todo>' +
                    '</div>' +
                    '<div class="modal-footer"></div>'
                );
            }

        };
    }

    angular.module('webapp').controller('ModalController', ModalController);
    ModalController.$inject = ['$scope', 'input', 'eventBus', '$uibModalInstance'];

    function ModalController($scope, input, eventBus, $uibModalInstance) {
        $scope.input = input;
        $scope.close = function() {
            $uibModalInstance.dismiss();
        };

        eventBus.onEvent('ModalClose', function() {
            $uibModalInstance.close();
        });
    }
})();