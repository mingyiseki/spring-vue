import Autocomplete from './src/index.mjs';

Autocomplete.install = (app) => {
  app.component(Autocomplete.name, Autocomplete);
};
const _Autocomplete = Autocomplete;
const ElAutocomplete = _Autocomplete;

export { ElAutocomplete, _Autocomplete as default };
//# sourceMappingURL=index.mjs.map
