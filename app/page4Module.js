export default Angular => {
    const ngPage4Module = Angular.module('page4App', []);

    require('./page4Controller')(ngPage4Module);
}