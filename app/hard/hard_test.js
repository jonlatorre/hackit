'use strict';

describe('myApp.hard module', function() {

  beforeEach(module('myApp.hard'));

  describe('hard controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view3Ctrl = $controller('View3Ctrl');
      expect(view3Ctrl).toBeDefined();
    }));

  });
});