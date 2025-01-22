function showTestDetails() {
  const testDropdown = document.getElementById("testDropdown");
  const testDetails = document.getElementById("testDetails");
  const testDescription = document.getElementById("testDescription");
  const test = testDropdown.value;

  if (!test) {
    testDetails.style.display = "none";
    return;
  }

  switch (test) {
    case "HbA1c":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 4.0% - 5.6%<br>
                <strong>Symptoms of Decrease:</strong> Fatigue, shakiness, dizziness<br>
                <strong>Medicines Decreasing HbA1c:</strong> Insulin, Sulfonylureas (e.g., glibenclamide), Metformin<br>
                <strong>Symptoms of Increase:</strong> Increased thirst, blurred vision, weight loss<br>
                <strong>Medicines Increasing HbA1c:</strong> Steroids (e.g., prednisone), Epinephrine
            `;
      break;
    case "RandomBloodGlucose":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 70 - 140 mg/dL<br>
                <strong>Symptoms of Decrease:</strong> Shakiness, dizziness, confusion<br>
                <strong>Medicines Decreasing Random Blood Glucose:</strong> Metformin, Insulin, GLP-1 agonists (e.g., liraglutide)<br>
                <strong>Symptoms of Increase:</strong> Fatigue, hunger, frequent urination<br>
                <strong>Medicines Increasing Random Blood Glucose:</strong> Corticosteroids (e.g., prednisone), antipsychotics (e.g., olanzapine)
            `;
      break;
    case "Hemoglobin":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 13.8 - 17.2 g/dL<br>
                <strong>Symptoms of Decrease:</strong> Fatigue, pale skin<br>
                <strong>Medicines Decreasing Hemoglobin:</strong> Iron deficiency drugs, chemotherapy, NSAIDs, blood thinners (e.g., heparin, warfarin)<br>
                <strong>Symptoms of Increase:</strong> Polycythemia, dizziness<br>
                <strong>Medicines Increasing Hemoglobin:</strong> Vitamin B12 supplements, erythropoietin, anabolic steroids, iron supplements
            `;
      break;
    case "ESR":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 0 - 22 mm/hr<br>
                <strong>Symptoms of Decrease:</strong> Fever, weight loss<br>
                <strong>Medicines Decreasing ESR:</strong> Corticosteroids, methotrexate, immunosuppressants, NSAIDs<br>
                <strong>Symptoms of Increase:</strong> Inflammation, anemia<br>
                <strong>Medicines Increasing ESR:</strong> NSAIDs, immunosuppressants, corticosteroids
            `;
      break;
    case "CRP":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 0 - 3 mg/L<br>
                <strong>Symptoms of Decrease:</strong> Fatigue, fever<br>
                <strong>Medicines Decreasing CRP:</strong> Corticosteroids, NSAIDs, immunosuppressants<br>
                <strong>Symptoms of Increase:</strong> Infection, arthritis<br>
                <strong>Medicines Increasing CRP:</strong> Immunosuppressants, TNF inhibitors (e.g., infliximab), biologics
            `;
      break;
    case "Ferritin":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 30 - 300 ng/mL<br>
                <strong>Symptoms of Decrease:</strong> Fatigue, weakness<br>
                <strong>Medicines Decreasing Ferritin:</strong> Iron supplements, blood thinners (may cause bleeding and lower ferritin)<br>
                <strong>Symptoms of Increase:</strong> Liver damage, heart disease<br>
                <strong>Medicines Increasing Ferritin:</strong> Iron supplements, transfusions (in severe anemia cases)
            `;
      break;
    case "Iron":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 60 - 170 mcg/dL<br>
                <strong>Symptoms of Decrease:</strong> Pale skin, weakness<br>
                <strong>Medicines Decreasing Iron:</strong> Antacids, proton pump inhibitors, calcium supplements, anticoagulants<br>
                <strong>Symptoms of Increase:</strong> Constipation, liver damage<br>
                <strong>Medicines Increasing Iron:</strong> Iron supplements, erythropoiesis-stimulating agents (e.g., epoetin alpha)
            `;
      break;
    case "VitaminD3":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 20 - 50 ng/mL<br>
                <strong>Symptoms of Decrease:</strong> Fatigue, bone pain<br>
                <strong>Medicines Decreasing Vitamin D3:</strong> Corticosteroids, anticonvulsants, weight loss drugs<br>
                <strong>Symptoms of Increase:</strong> Hypercalcemia, nausea<br>
                <strong>Medicines Increasing Vitamin D3:</strong> Vitamin D supplements, sunlight exposure, calcium supplements
            `;
      break;
    case "VitaminB12":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 200 - 900 pg/mL<br>
                <strong>Symptoms of Decrease:</strong> Fatigue, nerve damage<br>
                <strong>Medicines Decreasing Vitamin B12:</strong> Metformin, proton pump inhibitors, histamine H2 antagonists, alcohol<br>
                <strong>Symptoms of Increase:</strong> Headache, dizziness<br>
                <strong>Medicines Increasing Vitamin B12:</strong> Vitamin B12 injections, oral supplements, intranasal B12
            `;
      break;
    case "Prolactin":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 4.8 - 23.3 ng/mL<br>
                <strong>Symptoms of Decrease:</strong> Infertility, irregular periods<br>
                <strong>Medicines Decreasing Prolactin:</strong> Dopamine agonists, antipsychotics<br>
                <strong>Symptoms of Increase:</strong> Galactorrhea, infertility<br>
                <strong>Medicines Increasing Prolactin:</strong> Estrogen therapy, antidepressants, opioids
            `;
      break;
    case "Testosterone":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 300 - 1000 ng/dL<br>
                <strong>Symptoms of Decrease:</strong> Fatigue, low libido<br>
                <strong>Medicines Decreasing Testosterone:</strong> Opioids, corticosteroids, chemotherapy drugs<br>
                <strong>Symptoms of Increase:</strong> Acne, hair loss<br>
                <strong>Medicines Increasing Testosterone:</strong> Testosterone replacement therapy, anabolic steroids
            `;
      break;
    case "PSA":
      testDescription.innerHTML = `
                <strong>Normal Range:</strong> 0 - 4 ng/mL<br>
                <strong>Symptoms of Decrease:</strong> No symptoms<br>
                <strong>Medicines Decreasing PSA:</strong> Finasteride, dutasteride, 5-alpha reductase inhibitors<br>
                <strong>Symptoms of Increase:</strong> Prostate cancer, BPH<br>
                <strong>Medicines Increasing PSA:</strong> 5-alpha reductase inhibitors
            `;
      break;
    default:
      testDescription.innerHTML = "";
      break;
  }
}
