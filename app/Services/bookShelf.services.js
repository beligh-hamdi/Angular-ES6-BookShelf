import BookShelfService from './bookShelf.service.js';

var moduleName='bookShelf.services';

angular.module(moduleName, [])
    .factory('bookShelf.bookShelfSvc', BookShelfService.bookShelfFactory);

export default moduleName;
