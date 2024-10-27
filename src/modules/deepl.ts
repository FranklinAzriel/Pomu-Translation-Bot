import { config } from '../config'
import { asyncTryOrLog } from '../helpers/tryCatch'
import { getJson } from '../helpers/'

//export async function tl(text: string): Promise<string> {
  //const tlObject = await asyncTryOrLog(() =>
    //getJson('https://api-free.deepl.com/v2/translate', {
      //body: `auth_key=${config.deeplKey}&text=${text}&target_lang=EN`,
      //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //method: 'POST',
    //}),
  //)
  //const hasTl = tlObject?.translations !== undefined
  //const wasEng = tlObject?.translations?.[0].detected_source_language === ''
 //return wasEng && hasTl ? text : tlObject?.translations?.[0].text ?? text
//}

export async function tl(text: string): Promise<string> {
  const tlObject = await asyncTryOrLog(() => 
    getJson('https://libretranslate.com/translate', {
      body: JSON.stringify({
        q: `${text}`,
        source: 'auto',
        target: 'en'
      }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    }),
  );

  const hasTl = tlObject?.translations !== undefined;
  const wasEng = tlObject?.translations?.[0].detected_source_language === 'en';
  return wasEng && hasTl ? text : tlObject?.translations?.[0].text ?? text;
}



//export async function tl(text: string): Promise<string> {
  //const response = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + encodeURIComponent(text), {
    //method: 'GET',
    //headers: { 'Content-Type': 'application/json' },
  //});
//
  //const translationArray = await response.json();
  //const translatedText = translationArray[0][0][0];
//
  //return translatedText || text;
//}
