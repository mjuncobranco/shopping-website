const GenerateContent = class {
  fruits = {
    1: ["01", "grapes", "uvas", 4.95],
    2: ["02", "kiwis", "kiwi", 3.85],
    3: ["03", "grapefruits", "pomelos", 2.25],
    4: ["04", "cherries", "cerezas", 3.39],
    5: ["05", "blackberries", "moras", 7.87],
    6: ["06", "lemons", "limones", 1.25],
    7: ["07", "bananas", "plátanos", 1.95],
    8: ["08", "apples", "manzanas", 1.59],
    9: ["09", "oranges", "naranjas", 1.99],
    10: ["10", "apricots", "albaricoques", 1.5],
    11: ["11", "avocados", "aguacates", 2.25],
    12: ["12", "pears", "peras", 2.99],
    13: ["13", "blueberries", "arándanos", 26.5],
    14: ["14", "limes", "limas", 7.38],
    15: ["15", "plumbs", "ciruelas", 2.39],
    16: ["16", "strawberries", "fresas", 1.75],
    17: ["17", "raspberries", "frambuesas", 13.41],
    18: ["18", "peaches", "melocotones", 1.27],
    19: ["19", "coconuts", "cocos", 6.1],
    20: ["20", "pineapples", "piñas", 1.19],
    21: ["21", "watermelons", "sandías", 0.49],

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
    return card.content.firstElementChild;
  }
  setPageContent = (fruits) => {
    let card = "";
    let productContainer = document.querySelector('#products-list');
    console.log(productContainer);
    for (let productNumber in fruits) {
      card = this.getProductFormat(); 
      card = card.replace(/xxx/,fruits[productNumber][0]);
      card = card.replace(/nn/,fruits[productNumber][0]);
      card = card.replace(/fruitName/,fruits[productNumber][1]);
      card = card.replace(/zzz/,fruits[productNumber][1].trim());
      card = card.replace(/yyy/,fruits[productNumber][3]);
      productContainer.appendChild(this.htmlToElement(card));
      
    }
  };
};
let obj = new GenerateContent();
obj.getYear();
obj.setPageContent(obj.fruits);