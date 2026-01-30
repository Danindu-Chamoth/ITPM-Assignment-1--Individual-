# Singlish to Sinhala Translator - Automated Testing

**ITPM Assignment 1 (Individual)**  


This project contains automated end-to-end tests for the [Swift Translator](https://www.swifttranslator.com/) website using Playwright Test Framework.

---

## Project Overview

The test suite validates the Singlish to Sinhala translation functionality with **35 test cases** covering:

| Test Type | Count | Purpose |
|-----------|-------|---------|
| Pos_Fun | 24 | Positive functional tests - verify correct translations |
| Neg_Fun | 10 | Negative functional tests - demonstrate translator limitations |
| Pos_UI | 1 | UI test - verify real-time output updates |

---

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (Node Package Manager) - Comes with Node.js

To verify installation, run:
```bash
node --version
npm --version
```

---

## Installation Instructions

### Step 1: Extract the Project
Extract the zipped folder to your desired location.

### Step 2: Open Terminal/Command Prompt
Navigate to the project directory:
```bash
cd path/to/project-folder
```

### Step 3: Install Dependencies
Run the following command to install all required packages:
```bash
npm install
```

### Step 4: Install Playwright Browsers
Install the required browser binaries:
```bash
npx playwright install
```

---

## Running the Tests

### Option 1: Run All Tests (Recommended)
```bash
npx playwright test tests/translator.spec.js
```

### Option 2: Run Tests in Headed Mode (See Browser)
```bash
npx playwright test tests/translator.spec.js --headed
```

### Option 3: Run Tests with UI Mode
```bash
npx playwright test --ui
```

### Option 4: Run Specific Test by Name
```bash
npx playwright test -g "Pos_Fun_0001"
```

---

## Viewing Test Reports

After running tests, an HTML report is automatically generated.

### Open the HTML Report:
```bash
npx playwright show-report
```

The report will open in your default browser showing detailed results for all 35 test cases.

Reports are saved in the `playwright-report/` directory.

---

## Test Cases Summary

### Positive Functional Tests (24 Tests)

| TC ID | Test Case Name | Input Length | Quality Focus |
|-------|----------------|--------------|---------------|
| Pos_Fun_0001 | Convert simple daily sentence | S | Accuracy |
| Pos_Fun_0002 | Convert simple request | S | Accuracy |
| Pos_Fun_0003 | Convert compound sentence with conjunction | M | Accuracy |
| Pos_Fun_0004 | Convert complex conditional sentence | M | Accuracy |
| Pos_Fun_0005 | Convert interrogative question | S | Accuracy |
| Pos_Fun_0006 | Convert imperative command | S | Accuracy |
| Pos_Fun_0007 | Convert positive sentence | S | Accuracy |
| Pos_Fun_0008 | Convert greeting phrase | S | Accuracy |
| Pos_Fun_0009 | Convert polite request | M | Accuracy |
| Pos_Fun_0010 | Convert day-to-day expression | S | Accuracy |
| Pos_Fun_0011 | Convert multi-word collocation | S | Accuracy |
| Pos_Fun_0012 | Convert past tense sentence | S | Accuracy |
| Pos_Fun_0013 | Convert negation pattern | S | Accuracy |
| Pos_Fun_0014 | Convert singular pronoun variation | S | Accuracy |
| Pos_Fun_0015 | Convert mixed English technical term | M | Accuracy |
| Pos_Fun_0016 | Convert sentence with place name | M | Accuracy |
| Pos_Fun_0017 | Convert input with abbreviation | S | Accuracy |
| Pos_Fun_0018 | Convert slang with punctuation | S | Accuracy |
| Pos_Fun_0019 | Convert currency format | S | Formatting validation |
| Pos_Fun_0020 | Convert time format | S | Formatting validation |
| Pos_Fun_0021 | Convert date format | S | Formatting validation |
| Pos_Fun_0022 | Convert input with multiple spaces | M | Formatting validation |
| Pos_Fun_0023 | Convert multi-line input | M | Formatting validation |
| Pos_Fun_0024 | Convert long paragraph input | L | Accuracy |

### Negative Functional Tests (10 Tests)

| TC ID | Test Case Name | Input Length | Quality Focus |
|-------|----------------|--------------|---------------|
| Neg_Fun_0001 | Fail on joined words without spaces | S | Robustness |
| Neg_Fun_0002 | Fail on slang phrasing | S | Robustness |
| Neg_Fun_0003 | Fail on complex slang with typos | M | Robustness |
| Neg_Fun_0004 | Fail on repeated words for emphasis | S | Robustness |
| Neg_Fun_0005 | Fail on mixed slang and English | M | Robustness |
| Neg_Fun_0006 | Fail on informal phrasing | S | Robustness |
| Neg_Fun_0007 | Fail on long input with formatting | L | Robustness |
| Neg_Fun_0008 | Fail on joined word variation | S | Robustness |
| Neg_Fun_0009 | Fail on slang expression | S | Robustness |
| Neg_Fun_0010 | Fail on repeated emphasis | S | Robustness |

### UI Test (1 Test)

| TC ID | Test Case Name | Input Length | Quality Focus |
|-------|----------------|--------------|---------------|
| Pos_UI_0001 | Real-time output update on typing | S | UI Validation |

---

## Expected Test Results

| Test Type | Expected Status | Count |
|-----------|-----------------|-------|
| Pos_Fun | ✅ PASS | 24 |
| Neg_Fun | ❌ FAIL | 10 |
| Pos_UI | ✅ PASS | 1 |
| **Total** | **25 passed, 10 failed** | **35** |

> **Note:** The Neg_Fun tests are **intentionally designed to FAIL** to demonstrate the translator's limitations with edge cases like joined words, slang, and informal phrasing.

---

## Project Structure

```
├── tests/
│   └── translator.spec.js    # Main test file with all 35 test cases
├── playwright-report/        # HTML test reports (generated after running tests)
├── test-results/             # Test artifacts and error screenshots
├── playwright.config.js      # Playwright configuration
├── package.json              # Project dependencies
├── package-lock.json         # Dependency lock file
└── README.md                 # This file
```

---

## Technology Stack

- **Test Framework:** Playwright Test
- **Language:** JavaScript
- **Browser:** Chromium
- **Target Website:** https://www.swifttranslator.com/

---

## Troubleshooting

### Issue: Tests timeout or fail to load
**Solution:** Ensure you have a stable internet connection as tests connect to the live website.

### Issue: Browser not found
**Solution:** Run `npx playwright install` to install browser binaries.

### Issue: Node modules not found
**Solution:** Run `npm install` to install dependencies.

### Issue: Permission denied
**Solution:** Run terminal/command prompt as Administrator.

---

## Contact

For any questions regarding this project, please contact the student via SLIIT email.

---

**© 2026 SLIIT - ITPM Module | For Educational Purposes Only**
