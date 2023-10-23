const staticPaths = new Set(["/favicon.svg","/img/background.jpg","/img/category/CATEGORIA 1 LETREROS LUMINOSOS.jpg","/img/category/CATEGORIA 2 LETREROS CORPOREOS.jpg","/img/category/CATEGORIA 3 IMPRENTA GIGANTOGRAFIA.jpg","/img/category/CATEGORIA 4 TRABAJOS EN ACRILICO.jpg","/img/category/CATEGORIA 5 CORPOREOS.jpg","/img/category/CATEGORIA 6 DISPLAY PUBLICITARIOS.jpg","/img/category/CATEGORIA 7 SEÑALETICAS.jpg","/img/category/CATEGORIA 8 MERCHANDISING.jpg","/img/category/CATEGORIA 9 DECORACIÓN INTERIOR.jpg","/img/contact.jpg","/img/galery/letras.jpg","/img/galery/letrero luminoso.jpg","/img/galery/merchandaising.jpg","/img/galery/roolscream.jpg","/img/logo.png","/img/product/CONCYSSA.jpg","/img/product/Imagen14.png","/img/product/OxfordAcadem.jpg","/img/product/WhatsApp Image 2023-10-05 at 5.55.43 PM.jpeg","/img/product/WhatsApp Image 2023-10-05 at 5.55.59 PM.jpeg","/img/product/acrilicoTroquelado.jpg","/img/product/acrilicoTroquelado01.png","/img/product/acrilicoTroquelado02.png","/img/product/acrilicoTroquelado03.jpg","/img/product/acrilicos.jpeg","/img/product/actuvlis.jpg","/img/product/adidas.jpg","/img/product/angel.jpg","/img/product/backingWallDisplay.jpg","/img/product/backingwall01.jpg","/img/product/banner.png","/img/product/banner02.jpg","/img/product/banner03.png","/img/product/bar.jpg","/img/product/calendario.jpg","/img/product/calendarioPersonal.jpg","/img/product/cariDent.jpg","/img/product/catalogo.jpg","/img/product/centroEtetico.jpg","/img/product/chalecos.jpg","/img/product/coporeoFlechas.jpg","/img/product/corporeoSimple.jpg","/img/product/credimax.png","/img/product/cuadros.jpg","/img/product/cuadros02.jpg","/img/product/cuadros03.jpg","/img/product/cuadros04.jpg","/img/product/dmr.jpg","/img/product/escada.jpg","/img/product/exhibidor.jpg","/img/product/exhibidorQR.png","/img/product/flag.jpg","/img/product/flag01.jpg","/img/product/flag02.jpg","/img/product/flag03.jpg","/img/product/flag04.jpg","/img/product/flag05.jpg","/img/product/flyersA4.jpg","/img/product/flyersA5.jpg","/img/product/flyersA6.jpg","/img/product/fotoCheck.jpg","/img/product/interiores-services.jpg","/img/product/lafquenConstrutora.jpg","/img/product/lapiceros.jpg","/img/product/llaveros.jpg","/img/product/llaverosDestapador.jpg","/img/product/mdfTroquelado.jpg","/img/product/mdfTroquelado01.jpg","/img/product/mdfTroquelado02.jpg","/img/product/mdfTroquelado03.jpg","/img/product/mdfTroquelado04.jpg","/img/product/merchandising-service.jpg","/img/product/milagros.jpg","/img/product/mochilas.jpg","/img/product/moduloPvc.jpg","/img/product/naersi.jpg","/img/product/paranteRollScreen.jpg","/img/product/paranteRollScreen02.jpg","/img/product/paranteRollScreen03.jpg","/img/product/paranteRollScreen04.jpg","/img/product/piosRico.png","/img/product/pizarraCorporativa.jpg","/img/product/polos.jpg","/img/product/portaBrochure.png","/img/product/portaFilletosA4.jpg","/img/product/portafolletos01.jpg","/img/product/portafolletos02.jpg","/img/product/portafolletos03.jpg","/img/product/portafolletos04.jpg","/img/product/products-services.jpg","/img/product/reconocimiento.jpg","/img/product/reconocimientoMadera.jpg","/img/product/reebok.jpg","/img/product/rollscreen01.jpg","/img/product/rollscreen02.jpg","/img/product/rollscreen03.jpg","/img/product/rollscreen04.jpg","/img/product/rollscreendoble01.png","/img/product/ruleta.jpg","/img/product/ruletaChica.png","/img/product/signal.png","/img/product/sticker.png","/img/product/subHouse.jpg","/img/product/tarjetaDePresentacion.jpg","/img/product/tasas.jpg","/img/product/test.jpeg","/img/product/trictico.jpg","/img/product/uimder.png","/img/product/varios.jpg","/img/product/vijage.png","/img/product/vinil.jpg","/img/product/vinilArclad.png","/img/product/widerollscreen01.jpg","/img/services/1.jpg","/img/services/10.jpg","/img/services/11.jpg","/img/services/12.jpg","/img/services/13.jpg","/img/services/2.jpg","/img/services/3.jpg","/img/services/4.jpg","/img/services/5.jpg","/img/services/6.jpg","/img/services/7.jpg","/img/services/8.jpg","/img/services/9.jpg","/manifest.json","/q-manifest.json","/robots.txt","/service-worker.js","/sitemap.xml"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };