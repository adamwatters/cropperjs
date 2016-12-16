QUnit.test('options#cropBoxBackgroundImage: ""', function (assert) {
  var done = assert.async();
  var util = window.Util;
  var image = util.createImage();

  assert.expect(2);

  return new Cropper(image, {
    // cropBoxBackgroundImage: "",

    ready: function () {
      var cropper = this.cropper;
      var face = util.getByClass(cropper.cropBox, 'cropper-face');

      assert.notOk(util.hasClass(face[0], 'cropper-has-background-image'));
      assert.ok(util.getStyle(face[0], 'backgroundImage') === '');

      done();
    }
  });
});

QUnit.test('options#cropBoxBackgroundImage: "someImageUrl.png"', function (assert) {
  var done = assert.async();
  var util = window.Util;
  var image = util.createImage();

  assert.expect(2);

  return new Cropper(image, {
    cropBoxBackgroundImage: 'someImageUrl.png',

    ready: function () {
      var cropper = this.cropper;
      var face = util.getByClass(cropper.cropBox, 'cropper-face');

      assert.ok(util.hasClass(face[0], 'cropper-has-background-image'));
      // not matching entire 'url(someImageUrl.png)' because phantomjs is adding file path
      assert.ok(util.getStyle(face[0], 'backgroundImage').match('someImageUrl.png'));

      done();
    }
  });
});