/**
 * API föll.
 * @see https://lldev.thespacedevs.com/2.2.0/swagger/
 */

/**
 * Sækjum týpurnar okkar.
 * @typedef {import('./api.types.js').Launch} Launch
 * @typedef {import('./api.types.js').LaunchDetail} LaunchDetail
 * @typedef {import('./api.types.js').LaunchSearchResults} LaunchSearchResults
 */

/** Grunnslóð á API (DEV útgáfa) */
const API_URL = 'https://lldev.thespacedevs.com/2.2.0/';

/**   
 * @param {String} query Leitarstrengur
 * @returns {Promise<LaunchDetail | null>} Fylki af geimskotum
 */
export async function searchLaunches(query) {
  const url = new URL('launch', API_URL);
  url.searchParams.set('search', query);
  url.searchParams.set('mode', 'list');


  let response;
  try {
    response = await fetch(url);
    console.log('response:', response);
  } catch (e) {
    console.error('Villa kom upp við að sækja gögn');
    return null;
  }

  if (!response.ok) {
    console.error(
      'Villa við að sækja gögn, ekki 200 staða',
      response.status,
      response.statusText
    );
    return null;
  }

  let json;
  try {
    json = await response.json();
    console.log('json:', json);
  } catch (e) {
    console.error('Villa við að vinna úr JSON');
    return null;
  }

  return json.results;
}

/**
 * Skilar stöku geimskoti eftir auðkenni eða `null` ef ekkert fannst.
 * @param {string} id Auðkenni geimskots.
 * @returns {Promise<LaunchDetail | null>} Geimskot.
 */
export async function getLaunch(id) {
  /* TODO útfæra */
}
