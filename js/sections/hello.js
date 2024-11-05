import svelteWrapper from "JsComponents/svelte-wrapper";
import SvelteSample from 'SvelteComponents/hello';

export default () => {
    svelteWrapper(SvelteSample,'svelte-sample', '#product-data');
}
