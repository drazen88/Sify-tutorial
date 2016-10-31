/**
 * Copyright 2016 dryTools doo
 * Email: contact@drytools.co
 * 
 * This file is part of todo.
 * 
 * todo is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * todo is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with todo. If not, see <http://www.gnu.org/licenses/>.*
 **/
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