const { test, expect } = require('@playwright/test');

const testCases = [
  { id: 'Pos_Fun_0001', name: 'Convert simple daily sentence', length: 'S', 
    input: 'mata kg 2 rice oonee', 
    expected: 'මට kg 2 rice ඕනේ' },

  { id: 'Pos_Fun_0002', name: 'Convert simple request', length: 'S', 
    input: 'mata bath oonee.', 
    expected: 'මට බත් ඕනේ.' },

  { id: 'Pos_Fun_0003', name: 'Convert compound sentence with conjunction', length: 'M', 
    input: 'api kaeema kanna yanavaa saha passee chithrapatayakuth balanavaa.', 
    expected: 'අපි කෑම කන්න යනවා සහ පස්සේ චිත්‍රපටයකුත් බලනවා.' },

  { id: 'Pos_Fun_0004', name: 'Convert complex conditional sentence', length: 'M', 
    input: 'oyaa enavaanam mama balan innavaa.', 
    expected: 'ඔයා එනවානම් මම බලන් ඉන්නවා.' },

  { id: 'Pos_Fun_0005', name: 'Convert interrogative question', length: 'S', 
    input: 'oyaata kohomadha?', 
    expected: 'ඔයාට කොහොමද?' },

  { id: 'Pos_Fun_0006', name: 'Convert imperative command', length: 'S', 
    input: 'vahaama enna.', 
    expected: 'වහාම එන්න.' },

  { id: 'Pos_Fun_0007', name: 'Convert positive sentence', length: 'S', 
    input: 'mama ehema karanavaa.', 
    expected: 'මම එහෙම කරනවා.' },

  { id: 'Pos_Fun_0008', name: 'Convert greeting phrase', length: 'S', 
    input: 'aayuboovan!', 
    expected: 'ආයුබෝවන්!' },

  { id: 'Pos_Fun_0009', name: 'Convert polite request', length: 'M', 
    input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?', 
    expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?' },

  { id: 'Pos_Fun_0010', name: 'Convert day-to-day expression', length: 'S', 
    input: 'mata nidhimathayi.', 
    expected: 'මට නිදිමතයි.' },

  { id: 'Pos_Fun_0011', name: 'Convert multi-word collocation', length: 'S', 
    input: 'gihin enna.', 
    expected: 'ගිහින් එන්න.' },

  { id: 'Pos_Fun_0012', name: 'Convert past tense sentence', length: 'S', 
    input: 'mama iiyee gedhara giyaa.', 
    expected: 'මම ඊයේ ගෙදර ගියා.' },

  { id: 'Pos_Fun_0013', name: 'Convert negation pattern', length: 'S', 
    input: 'mama dhannee naee.', 
    expected: 'මම දන්නේ නෑ.' },

  { id: 'Pos_Fun_0014', name: 'Convert singular pronoun variation', length: 'S', 
    input: 'oyaa enavadha?', 
    expected: 'ඔයා එනවද?' },

  { id: 'Pos_Fun_0015', name: 'Convert mixed English technical term', length: 'M', 
    input: 'Zoom meeting ekak thiyennee.', 
    expected: 'Zoom meeting එකක් තියෙන්නේ.' },

  { id: 'Pos_Fun_0016', name: 'Convert sentence with place name', length: 'M', 
    input: 'siiyaa Colombo yanna hadhannee.', 
    expected: 'සීයා Colombo යන්න හදන්නේ.' },

  { id: 'Pos_Fun_0017', name: 'Convert input with abbreviation', length: 'S', 
    input: 'PIN eka dhenna.', 
    expected: 'PIN එක දෙන්න.' },

  { id: 'Pos_Fun_0018', name: 'Convert slang with punctuation', length: 'S', 
    input: 'ela machan!', 
    expected: 'එල මචන්!' },

  { id: 'Pos_Fun_0019', name: 'Convert currency format', length: 'S', 
    input: 'Rs. 5343', 
    expected: 'Rs. 5343' },

  { id: 'Pos_Fun_0020', name: 'Convert time format', length: 'S', 
    input: '7.30 AM', 
    expected: '7.30 AM' },

  { id: 'Pos_Fun_0021', name: 'Convert date format', length: 'S', 
    input: '25/12/2025', 
    expected: '25/12/2025' },

  { id: 'Pos_Fun_0022', name: 'Convert input with multiple spaces', length: 'M', 
    input: 'mama gedhara   yanavaa.', 
    expected: 'මම ගෙදර   යනවා.' },

  { id: 'Pos_Fun_0023', name: 'Convert multi-line input', length: 'M', 
    input: 'mama gedhara yanavaa.\noyaa enavadha maath ekka yanna?', 
    expected: 'මම ගෙදර යනවා.\nඔයා එනවද මාත් එක්ක යන්න?' },

  { id: 'Pos_Fun_0024', name: 'Convert long paragraph input', length: 'L', input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana, mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.', expected: 'දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන, මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය.' },

  { id: 'Neg_Fun_0001', name: 'Fail on joined words without spaces', length: 'S', input: 'mamagedharayanavaa', expected: 'මම ගෙදර යනවා', isNegative: true },
  { id: 'Neg_Fun_0002', name: 'Fail on slang phrasing', length: 'S', input: 'ela machan! supiri!!', expected: 'එළ මචන්! සුපිරි!!', isNegative: true },
  { id: 'Neg_Fun_0003', name: 'Fail on complex slang with typos', length: 'M', input: 'adoo vaedak baaragaththaanam eeka hariyata karapanko bQQ.', expected: 'අඩෝ වැඩක් බාරගත්තානම් ඒක හරියට කරපංකෝ බෝ.', isNegative: true },
  { id: 'Neg_Fun_0004', name: 'Fail on repeated words for emphasis', length: 'S', input: 'hari hari', expected: 'හරි හරි හරි', isNegative: true },
  { id: 'Neg_Fun_0005', name: 'Fail on mixed slang and English', length: 'M', input: 'appatasiri, mata beheth bonna amathaka vunaa kiyahankoo.', expected: 'අප්පටසිරි, මට බෙහෙත් බොන්න අමතක වුණා කියහන්කෝ.', isNegative: true },
  { id: 'Neg_Fun_0006', name: 'Fail on informal phrasing', length: 'S', input: 'eeyi, oka dhiyan.', expected: 'එයි, ඕක දියන්.', isNegative: true },
  { id: 'Neg_Fun_0007', name: 'Fail on long input with formatting', length: 'L', input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k pamaNa vana bava pravaahana, mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka saDHahan kaLeeya.', expected: 'දිත්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් පමණ වන බව ප්‍රවාහන, මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය.', isNegative: true },
  { id: 'Neg_Fun_0008', name: 'Fail on joined word variation', length: 'S', input: 'matapaankannaoonee', expected: 'මට පාන් කන්න ඕනේ', isNegative: true },
  { id: 'Neg_Fun_0009', name: 'Fail on slang expression', length: 'S', input: 'eka poddak amaaruyi vagee', expected: 'ඒක පොඩ්ඩක් අමාරුයි වගේ', isNegative: true },
  { id: 'Neg_Fun_0010', name: 'Fail on repeated emphasis', length: 'S', input: 'chuttak chuttak', expected: 'චුට්ටක් චුට්ටක් චුට්ටක්', isNegative: true },

  { id: 'Pos_UI_0001', name: 'Real-time output update on typing', length: 'S', input: 'mama gedhara yanavaa.', expected: 'මම ගෙදර යනවා.', isUI: true },
];

const testResults = [];

test.describe('Singlish to Sinhala Translation Tests', () => {
  
  test.beforeAll(() => {
    console.log('\n========================================');
    console.log('🚀 Starting Singlish to Sinhala Translation Tests');
    console.log('📅 Test Date: ' + new Date().toLocaleString());
    console.log('🌐 Website: https://www.swifttranslator.com/');
    console.log('========================================\n');
  });

  for (const tc of testCases) {
    test(`${tc.id}: ${tc.name}`, async ({ page }) => {
      await page.goto('https://www.swifttranslator.com/');
      
      await page.waitForLoadState('networkidle');
      
      const inputArea = page.locator('textarea').first();
      
      const outputArea = page.locator('div.whitespace-pre-wrap.overflow-y-auto.bg-slate-50');
      
      await inputArea.clear();
      await inputArea.fill(tc.input);
      
      const waitTime = tc.length === 'L' ? 5000 : 3000;
      await page.waitForTimeout(waitTime);
      
      let outputValue = await outputArea.innerText();
      
      if (outputValue === '' && !tc.isNegative) {
        await page.waitForTimeout(2000);
        outputValue = await outputArea.innerText();
      }
      
      console.log(`\n${tc.id}: ${tc.name}`);
      console.log(`   Type:     ${tc.isNegative ? '❌ Negative' : tc.isUI ? '🖥️ UI' : '✅ Positive'}`);
      console.log(`   Length:   ${tc.length}`);
      console.log(`   Input:    "${tc.input}"`);
      console.log(`   Expected: "${tc.expected}"`);
      console.log(`   Actual:   "${outputValue}"`);
      
      const passed = outputValue.includes(tc.expected) || tc.expected.includes(outputValue) || outputValue === tc.expected;
      console.log(`   Status:   ${passed ? '✅ PASSED' : '❌ FAILED'}`);
      
      testResults.push({
        id: tc.id,
        name: tc.name,
        length: tc.length,
        input: tc.input,
        expected: tc.expected,
        actual: outputValue,
        passed: passed,
        isNegative: tc.isNegative || false,
        isUI: tc.isUI || false
      });
      
      if (tc.isNegative) {
        expect(outputValue).toBe(tc.expected);
      } else {
        expect(outputValue).toBe(tc.expected);
      }
    });
  }

  test.afterAll(() => {
    console.log('\n========================================');
    console.log('📊 TEST SUMMARY REPORT');
    console.log('========================================');
    const passed = testResults.filter(r => r.passed).length;
    const failed = testResults.filter(r => !r.passed).length;
    console.log(`✅ Passed: ${passed}`);
    console.log(`❌ Failed: ${failed}`);
    console.log(`📈 Total:  ${testResults.length}`);
    console.log(`📊 Pass Rate: ${((passed / testResults.length) * 100).toFixed(2)}%`);
    console.log('========================================\n');
  });
});