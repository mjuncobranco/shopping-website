const GenerateContent = class {
  fruits = {
    1: ["01", "grapes", "uvas", 4.95],
    2: ["02", "kiwis", "kiwi", 3.85],
  };

  getYear = () => {
    let year = new Date();
    document.querySelector(".date").innerHTML += year.getFullYear();
  };
  getProductFormat = () => {
    let product = `
    <div
          class="draggable card mb-4 shadow-sm"
          draggable="true"
          product-id="xxx"
        >
          <img
            src="img/fr-nn.jpg"
            class="card-img-top"
            alt="fruitName"
            draggable="false"
          />
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              yyy € <small class="text-muted">/ Kg</small>
            </h1>
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-lg btn-block btn-warning">
                Add to cart
              </button>
            </div>
          </div>
          <div class="card-footer bg-info text-white">
            <h4 class="my-0 font-weight-normal">zzz</h4>
          </div>
        </div>
    `;
    return product;
  };

  htmlToElement = (html) => {
    let card = document.createElement("template");
    html = html.trim();
    card.innerHTML = html;
  }
};
let obj = new GenerateContent();
obj.getYear();
