QUnit.test('options#cropBoxBackgroundOpacity: NaN', function (assert) {
  var done = assert.async();
  var util = window.Util;
  var image = util.createImage();

  assert.expect(1);

  return new Cropper(image, {
    // cropBoxBackgroundOpacity: NaN,

    ready: function () {
      var cropper = this.cropper;
      var face = util.getByClass(cropper.cropBox, 'cropper-face');

      assert.ok(util.getStyle(face[0], 'opacity') === '');

      done();
    }
  });
});

QUnit.test('options#cropBoxBackgroundOpacity: .5', function (assert) {
  var done = assert.async();
  var util = window.Util;
  var image = util.createImage();

  assert.expect(1);

  return new Cropper(image, {
    cropBoxBackgroundOpacity: .5,

    ready: function () {
      var cropper = this.cropper;
      var face = util.getByClass(cropper.cropBox, 'cropper-face');

      assert.ok(util.getStyle(face[0], 'opacity') === '0.5');

      done();
    }
  });
});