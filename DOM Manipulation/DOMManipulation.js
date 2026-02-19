(() => {

  // Function to get element by ID
  const $ = (id) => document.getElementById(id);

  // ID references
  const FORMS = { filter: "filterContent", add: "newContent" };
  const CHECKBOX = { opinion: "opinionCheckbox", recipe: "recipeCheckbox", update: "updateCheckbox" };
  const RADIO = { opinion: "opinionRadio", recipe: "recipeRadio", update: "lifeRadio" };
  const INPUTS = { title: "inputHeader", text: "inputArticle" };
  const ARTICLE_LIST_ID = "articleList";


  // Initialize page (hide menus and apply initial filter)
  document.addEventListener("DOMContentLoaded", () => {
    const filterForm = $(FORMS.filter);
    const addForm = $(FORMS.add);

    if (filterForm) filterForm.style.display = "none";
    if (addForm) addForm.style.display = "none";

    window.filterArticles();
  });


  // Toggle visibility of filter menu
  window.showFilter = function showFilter() {
    const filterForm = $(FORMS.filter);
    const addForm = $(FORMS.add);
    if (!filterForm) return;

    const willShow = filterForm.style.display === "none" || filterForm.style.display === "";
    filterForm.style.display = willShow ? "block" : "none";

    // Hide add form if filter is shown
    if (willShow && addForm) addForm.style.display = "none";
  };


  // Toggle visibility of add-new-article form
  window.showAddNew = function showAddNew() {
    const filterForm = $(FORMS.filter);
    const addForm = $(FORMS.add);
    if (!addForm) return;

    const willShow = addForm.style.display === "none" || addForm.style.display === "";
    addForm.style.display = willShow ? "flex" : "none";

    // Hide filter menu if add form is shown
    if (willShow && filterForm) filterForm.style.display = "none";
  };


  // Show or hide articles based on selected checkboxes
  window.filterArticles = function filterArticles() {
    const showOpinion = $(CHECKBOX.opinion)?.checked ?? true;
    const showRecipe = $(CHECKBOX.recipe)?.checked ?? true;
    const showUpdate = $(CHECKBOX.update)?.checked ?? true;

    const articles = document.querySelectorAll(`#${ARTICLE_LIST_ID} article`);

    articles.forEach((article) => {
      const isOpinion = article.classList.contains("opinion");
      const isRecipe = article.classList.contains("recipe");
      const isUpdate = article.classList.contains("update");

      let shouldShow = true;
      if (isOpinion) shouldShow = showOpinion;
      else if (isRecipe) shouldShow = showRecipe;
      else if (isUpdate) shouldShow = showUpdate;

      article.style.display = shouldShow ? "" : "none";
    });
  };


  // Create and append a new article to the list
  window.addNewArticle = function addNewArticle() {
    const title = ($(INPUTS.title)?.value ?? "").trim();
    const text = ($(INPUTS.text)?.value ?? "").trim();

    const isOpinion = $(RADIO.opinion)?.checked ?? false;
    const isRecipe = $(RADIO.recipe)?.checked ?? false;
    const isUpdate = $(RADIO.update)?.checked ?? false;

    let typeClass = "";
    let typeLabel = "";

    if (isOpinion) { typeClass = "opinion"; typeLabel = "Opinion"; }
    else if (isRecipe) { typeClass = "recipe"; typeLabel = "Recipe"; }
    else if (isUpdate) { typeClass = "update"; typeLabel = "Update"; }

    // Basic validation
    if (!title) return alert("Please enter a title.");
    if (!typeClass) return alert("Please select an article type.");
    if (!text) return alert("Please enter article text.");

    const articleList = $(ARTICLE_LIST_ID);
    if (!articleList) return;

    // Build article element
    const article = document.createElement("article");
    article.classList.add(typeClass);
    article.id = `a${Date.now()}`;

    const marker = document.createElement("span");
    marker.className = "marker";
    marker.textContent = typeLabel;

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const pText = document.createElement("p");
    pText.textContent = text;

    const pLink = document.createElement("p");
    const link = document.createElement("a");
    link.href = "moreDetails.html";
    link.textContent = "Read more...";
    pLink.appendChild(link);

    article.append(marker, h2, pText, pLink);
    articleList.appendChild(article);

    // Reapply filter after adding
    window.filterArticles();

    // Reset form fields
    $(INPUTS.title).value = "";
    $(INPUTS.text).value = "";
    $(RADIO.opinion).checked = false;
    $(RADIO.recipe).checked = false;
    $(RADIO.update).checked = false;
  };

})();
