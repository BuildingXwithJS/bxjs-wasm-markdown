use pulldown_cmark::{html, Options, Parser};
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn render(markdown_input: &str) -> String {
  let options = Options::empty();
  let parser = Parser::new_ext(markdown_input, options);

  // Write to String buffer.
  let mut html_output = String::new();
  html::push_html(&mut html_output, parser);

  return html_output;
}
