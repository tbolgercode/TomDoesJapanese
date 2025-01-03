

const getWkApiVocabCount = async () => {

    const url = "https://api.wanikani.com/v2/assignments";

    const res = await request({
			url: url, 
			method: 'GET',
			cache: 'no-cache',
			headers: {
                "Authorization": "Bearer ccab36a0-35b5-4854-ae40-e53462545618"
			}
      })

    const data = JSON.parse(res).data;
    //Remove @'s from string
    return data;

}

const getWkVocabCount = async (QuickAdd, settings) => {

    const data = await getStoicApiQuote();

    QuickAdd.variables = {
		...data
    }
}

module.exports = {
  entry: getWkVocabCount,
  settings: {
    name: "Get Wk Vocab Stats",
    author: "TBolgerCode",
    options: {},
  },
};

