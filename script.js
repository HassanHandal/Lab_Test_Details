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
    case "Sodium":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 135 - 145 mmol/L<br>
            <strong>Symptoms of Decrease:</strong> Confusion, muscle cramps, headache, nausea<br>
            <strong>Medicines Decreasing Sodium:</strong> Diuretics (e.g., furosemide), ACE inhibitors (e.g., enalapril), antipsychotics (e.g., thioridazine)<br>
            <strong>Symptoms of Increase:</strong> Hypertension, edema, lethargy<br>
            <strong>Medicines Increasing Sodium:</strong> IV fluids (e.g., sodium chloride), sodium bicarbonate
        `;
      break;
    case "Potassium":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 3.5 - 5.0 mmol/L<br>
            <strong>Symptoms of Decrease:</strong> Weakness, fatigue, muscle cramps, constipation<br>
            <strong>Medicines Decreasing Potassium:</strong> Diuretics, corticosteroids, beta-agonists<br>
            <strong>Symptoms of Increase:</strong> Muscle weakness, arrhythmias, heart palpitations<br>
            <strong>Medicines Increasing Potassium:</strong> Potassium-sparing diuretics, ACE inhibitors
        `;
      break;
    case "Chloride":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 98 - 106 mmol/L<br>
            <strong>Symptoms of Decrease:</strong> Weakness, difficulty breathing, metabolic alkalosis<br>
            <strong>Medicines Decreasing Chloride:</strong> Diuretics, corticosteroids<br>
            <strong>Symptoms of Increase:</strong> Hyperchloremic acidosis, dehydration<br>
            <strong>Medicines Increasing Chloride:</strong> IV fluids (e.g., saline solution)
        `;
      break;
    case "Magnesium":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 1.7 - 2.2 mg/dL<br>
            <strong>Symptoms of Decrease:</strong> Muscle cramps, arrhythmias, fatigue<br>
            <strong>Medicines Decreasing Magnesium:</strong> Diuretics, certain antibiotics (e.g., aminoglycosides)<br>
            <strong>Symptoms of Increase:</strong> Nausea, vomiting, hypotension, respiratory depression<br>
            <strong>Medicines Increasing Magnesium:</strong> Magnesium supplements, antacids
        `;
      break;
    case "Calcium":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 8.5 - 10.2 mg/dL<br>
            <strong>Symptoms of Decrease:</strong> Muscle spasms, tingling, seizures<br>
            <strong>Medicines Decreasing Calcium:</strong> Bisphosphonates, corticosteroids<br>
            <strong>Symptoms of Increase:</strong> Nausea, vomiting, kidney stones, confusion<br>
            <strong>Medicines Increasing Calcium:</strong> Calcium supplements, vitamin D
        `;
      break;
    case "Phosphorus":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 2.5 - 4.5 mg/dL<br>
            <strong>Symptoms of Decrease:</strong> Weak muscles, bone pain, fatigue<br>
            <strong>Medicines Decreasing Phosphorus:</strong> Antacids, calcium supplements<br>
            <strong>Symptoms of Increase:</strong> Itching, muscle cramps, calcification of soft tissues<br>
            <strong>Medicines Increasing Phosphorus:</strong> Phosphate supplements
        `;
      break;
    case "Zinc":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 70 - 120 µg/dL<br>
            <strong>Symptoms of Decrease:</strong> Hair loss, impaired wound healing, taste disturbances<br>
            <strong>Medicines Decreasing Zinc:</strong> Diuretics, penicillamine<br>
            <strong>Symptoms of Increase:</strong> Nausea, vomiting, copper deficiency<br>
            <strong>Medicines Increasing Zinc:</strong> Zinc supplements
        `;
      break;
    case "AST":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 10 - 40 U/L<br>
            <strong>Symptoms of Decrease:</strong> Rarely a concern<br>
            <strong>Medicines Decreasing AST:</strong> None<br>
            <strong>Symptoms of Increase:</strong> Liver damage, muscle injury<br>
            <strong>Medicines Increasing AST:</strong> Statins, acetaminophen (overdose)
        `;
      break;
    case "ALT":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 7 - 56 U/L<br>
            <strong>Symptoms of Decrease:</strong> Rarely a concern<br>
            <strong>Medicines Decreasing ALT:</strong> None<br>
            <strong>Symptoms of Increase:</strong> Liver damage, hepatitis<br>
            <strong>Medicines Increasing ALT:</strong> Statins, acetaminophen (overdose)
        `;
      break;
    case "SerumCreatinine":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 0.6 - 1.2 mg/dL<br>
            <strong>Symptoms of Decrease:</strong> Not usually a concern<br>
            <strong>Medicines Decreasing Creatinine:</strong> None<br>
            <strong>Symptoms of Increase:</strong> Kidney dysfunction, dehydration<br>
            <strong>Medicines Increasing Creatinine:</strong> ACE inhibitors, diuretics
        `;
      break;
    case "UricAcid":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 3.5 - 7.2 mg/dL<br>
            <strong>Symptoms of Decrease:</strong> Rarely a concern<br>
            <strong>Medicines Decreasing Uric Acid:</strong> Probenecid, losartan<br>
            <strong>Symptoms of Increase:</strong> Gout, kidney stones<br>
            <strong>Medicines Increasing Uric Acid:</strong> Diuretics, aspirin (low dose)
        `;
      break;
    case "TSH":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 0.4 - 4.0 µIU/mL<br>
            <strong>Symptoms of Decrease:</strong> Weight loss, heat intolerance, nervousness<br>
            <strong>Medicines Decreasing TSH:</strong> Thyroid hormone replacement<br>
            <strong>Symptoms of Increase:</strong> Fatigue, weight gain, cold intolerance<br>
            <strong>Medicines Increasing TSH:</strong> Lithium, amiodarone
        `;
      break;
    case "FT4":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 0.8 - 1.8 ng/dL<br>
            <strong>Symptoms of Decrease:</strong> Fatigue, weight gain, constipation<br>
            <strong>Medicines Decreasing FT4:</strong> Lithium, amiodarone<br>
            <strong>Symptoms of Increase:</strong> Weight loss, nervousness, heat intolerance<br>
            <strong>Medicines Increasing FT4:</strong> Thyroid hormone replacement
        `;
      break;
    case "FT3":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 2.3 - 4.2 pg/mL<br>
            <strong>Symptoms of Decrease:</strong> Fatigue, weight gain, depression<br>
            <strong>Medicines Decreasing FT3:</strong> Amiodarone, lithium<br>
            <strong>Symptoms of Increase:</strong> Weight loss, anxiety, palpitations<br>
            <strong>Medicines Increasing FT3:</strong> Thyroid hormone replacement
        `;
      break;
    case "Cholesterol":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> <200 mg/dL<br>
            <strong>Symptoms of Decrease:</strong> Rarely a concern<br>
            <strong>Medicines Decreasing Cholesterol:</strong> Statins, fibrates<br>
            <strong>Symptoms of Increase:</strong> Atherosclerosis, heart disease<br>
            <strong>Medicines Increasing Cholesterol:</strong> Steroids, some diuretics
        `;
      break;
    case "HDL":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> >60 mg/dL (desired)<br>
            <strong>Symptoms of Decrease:</strong> Increased risk of heart disease<br>
            <strong>Medicines Decreasing HDL:</strong> Beta-blockers, anabolic steroids<br>
            <strong>Symptoms of Increase:</strong> Lowered cardiovascular risk<br>
            <strong>Medicines Increasing HDL:</strong> Statins, niacin
        `;
      break;
    case "LDL":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> <100 mg/dL (optimal)<br>
            <strong>Symptoms of Decrease:</strong> Lowered risk of cardiovascular diseases<br>
            <strong>Medicines Decreasing LDL:</strong> Statins, bile acid sequestrants<br>
            <strong>Symptoms of Increase:</strong> Atherosclerosis, heart disease<br>
            <strong>Medicines Increasing LDL:</strong> Steroids, certain diuretics
        `;
      break;
    case "Triglycerides":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> <150 mg/dL<br>
            <strong>Symptoms of Decrease:</strong> Rarely a concern<br>
            <strong>Medicines Decreasing Triglycerides:</strong> Fibrates, omega-3 fatty acids<br>
            <strong>Symptoms of Increase:</strong> Pancreatitis, obesity, cardiovascular disease<br>
            <strong>Medicines Increasing Triglycerides:</strong> Steroids, beta-blockers
        `;
      break;
    case "VLDL":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 2 - 30 mg/dL<br>
            <strong>Symptoms of Decrease:</strong> Rarely a concern<br>
            <strong>Medicines Decreasing VLDL:</strong> Fibrates, statins<br>
            <strong>Symptoms of Increase:</strong> Increased cardiovascular risk<br>
            <strong>Medicines Increasing VLDL:</strong> Alcohol, sugar
        `;
      break;
    case "HbA1c":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> <5.7%<br>
            <strong>Symptoms of Decrease:</strong> Not typically a concern<br>
            <strong>Medicines Decreasing HbA1c:</strong> Insulin, metformin<br>
            <strong>Symptoms of Increase:</strong> Poor blood sugar control, diabetes<br>
            <strong>Medicines Increasing HbA1c:</strong> Corticosteroids, antipsychotics
        `;
      break;
    case "RandomBloodGlucose":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 70 - 140 mg/dL<br>
            <strong>Symptoms of Decrease:</strong> Hypoglycemia (shakiness, confusion)<br>
            <strong>Medicines Decreasing Blood Glucose:</strong> Insulin, sulfonylureas<br>
            <strong>Symptoms of Increase:</strong> Hyperglycemia (excessive thirst, frequent urination)<br>
            <strong>Medicines Increasing Blood Glucose:</strong> Corticosteroids, thiazide diuretics
        `;
      break;
    case "Hemoglobin":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 12 - 16 g/dL (women), 13 - 18 g/dL (men)<br>
            <strong>Symptoms of Decrease:</strong> Fatigue, pallor, shortness of breath<br>
            <strong>Medicines Decreasing Hemoglobin:</strong> Chemotherapy, blood loss<br>
            <strong>Symptoms of Increase:</strong> Dehydration, polycythemia<br>
            <strong>Medicines Increasing Hemoglobin:</strong> Erythropoiesis-stimulating agents
        `;
      break;
    case "ESR":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 0 - 20 mm/hr (men), 0 - 30 mm/hr (women)<br>
            <strong>Symptoms of Decrease:</strong> Rarely a concern<br>
            <strong>Medicines Decreasing ESR:</strong> Corticosteroids, nonsteroidal anti-inflammatory drugs (NSAIDs)<br>
            <strong>Symptoms of Increase:</strong> Inflammation, infection, autoimmune diseases<br>
            <strong>Medicines Increasing ESR:</strong> None
        `;
      break;
    case "CRP":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> <3.0 mg/L<br>
            <strong>Symptoms of Decrease:</strong> Rarely a concern<br>
            <strong>Medicines Decreasing CRP:</strong> Statins, corticosteroids<br>
            <strong>Symptoms of Increase:</strong> Inflammation, infection, chronic diseases<br>
            <strong>Medicines Increasing CRP:</strong> None
        `;
      break;
    case "Ferritin":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 20 - 500 ng/mL (men), 20 - 200 ng/mL (women)<br>
            <strong>Symptoms of Decrease:</strong> Fatigue, weakness, pallor<br>
            <strong>Medicines Decreasing Ferritin:</strong> Iron chelators, certain medications for chronic diseases<br>
            <strong>Symptoms of Increase:</strong> Joint pain, liver damage, high iron levels<br>
            <strong>Medicines Increasing Ferritin:</strong> Iron supplements
        `;
      break;
    case "Iron":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 60 - 170 µg/dL<br>
            <strong>Symptoms of Decrease:</strong> Fatigue, weakness, pale skin<br>
            <strong>Medicines Decreasing Iron:</strong> Proton pump inhibitors (PPIs), calcium supplements<br>
            <strong>Symptoms of Increase:</strong> Joint pain, liver damage, iron overload<br>
            <strong>Medicines Increasing Iron:</strong> Iron supplements
        `;
      break;
    case "VitaminD3":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 20 - 50 ng/mL<br>
            <strong>Symptoms of Decrease:</strong> Bone pain, muscle weakness, fatigue<br>
            <strong>Medicines Decreasing Vitamin D3:</strong> Steroids, anticonvulsants<br>
            <strong>Symptoms of Increase:</strong> Hypercalcemia, kidney stones<br>
            <strong>Medicines Increasing Vitamin D3:</strong> Vitamin D3 supplements
        `;
      break;
    case "VitaminB12":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 200 - 900 pg/mL<br>
            <strong>Symptoms of Decrease:</strong> Fatigue, weakness, nerve damage, anemia<br>
            <strong>Medicines Decreasing Vitamin B12:</strong> Metformin, proton pump inhibitors<br>
            <strong>Symptoms of Increase:</strong> Rarely a concern<br>
            <strong>Medicines Increasing Vitamin B12:</strong> Vitamin B12 supplements
        `;
      break;
    case "Prolactin":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 5 - 25 ng/mL (women), 2 - 18 ng/mL (men)<br>
            <strong>Symptoms of Decrease:</strong> Rarely a concern<br>
            <strong>Medicines Decreasing Prolactin:</strong> Dopamine agonists (e.g., bromocriptine)<br>
            <strong>Symptoms of Increase:</strong> Infertility, lactation, menstrual irregularities<br>
            <strong>Medicines Increasing Prolactin:</strong> Antipsychotics, antidepressants
        `;
      break;
    case "TotalTestosterone":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> 300 - 1,000 ng/dL (men), 15 - 70 ng/dL (women)<br>
            <strong>Symptoms of Decrease:</strong> Fatigue, depression, low libido, infertility<br>
            <strong>Medicines Decreasing Testosterone:</strong> Opioids, corticosteroids<br>
            <strong>Symptoms of Increase:</strong> Acne, aggression, excessive hair growth<br>
            <strong>Medicines Increasing Testosterone:</strong> Testosterone replacement therapy
        `;
      break;
    case "PSA":
      testDescription.innerHTML = `
            <strong>Normal Range:</strong> <4.0 ng/mL<br>
            <strong>Symptoms of Decrease:</strong> Rarely a concern<br>
            <strong>Medicines Decreasing PSA:</strong> 5-alpha reductase inhibitors (e.g., finasteride)<br>
            <strong>Symptoms of Increase:</strong> Prostate enlargement, prostate cancer<br>
            <strong>Medicines Increasing PSA:</strong> Testosterone, certain medications for prostate cancer
        `;
      break;
    default:
      testDescription.innerHTML = "";
      break;
  }
}
