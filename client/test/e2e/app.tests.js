
describe('my app', function() {

  beforeEach(function () {
    browser.get('/#/tab/dash');
  });

  it('should automatically redirect to / when location hash is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  it('should consist of appname as heading', function() {
    element(by.css('.text-muted')).getText().then(function(name) {
	  expect(name).toBe('myNgApp');
	});
  });

  it('should consist of 3 menu items', function() {
    var list = element.all(by.css('.nav li'));
	expect(list.count()).toBe(3);
  });

});

describe('Probando las tabs de la aplicación', function() {

    it('Debe ser posible hacer click en la tab de Canciones', function() {
        expect(element(by.css('a[icon-on=ion-ios-book]')).isPresent()).toBe(true);
        element(by.css('a[icon-on=ion-ios-book]')).click();
    });

    it('La lista de canciones debe ser mayor a 0', function() {
      element.all(by.repeater('song in songs')).count().then(function(count) {
        expect(count).toBeGreaterThan(0);
      });
    });

    it('Debe ser posible visualizar las canciones recomendadas', function() {
        expect(element(by.css('a[icon-on=ion-ios-star]')).isPresent()).toBe(true);
        element(by.css('a[icon-on=ion-ios-star]')).click();
    });

    it('La lista de canciones recomendadas debe ser mayor a 0', function() {
      element.all(by.repeater('rec in recommends')).count().then(function(count) {
        expect(count).toBeGreaterThan(0);
      });
    });

    it('Debe ser posible dar click en el ranking de canciones', function() {
        expect(element(by.css('a[icon-on=ion-ios-checkmark-outline]')).isPresent()).toBe(true);
        element(by.css('a[icon-on=ion-ios-checkmark-outline]')).click();
    });

    it('El ranking debe tener al menos 1 canción', function() {
      element.all(by.repeater('r in ranking')).count().then(function(count) {
        expect(count).toBeGreaterThan(0);
      });
    });
});
