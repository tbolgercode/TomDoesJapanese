

const getStoicApiQuote = async () => {

    const url = "https://stoic.tekloon.net/stoic-quote";

    const res = await request({
			url: url, 
			method: 'GET',
			cache: 'no-cache',
			headers: {
			}
      })

    const data = JSON.parse(res).data;
    //Remove @'s from string
    data.quote = data.quote.replace(' @', '');
    return data;

}

const getStoicQuote = async (QuickAdd, settings) => {

    const data = await getStoicApiQuote();

    QuickAdd.variables = {
		...data
    }
}

module.exports = {
  entry: getStoicQuote,
  settings: {
    name: "Get Stoic Quote",
    author: "TBolgerCode",
    options: {},
  },
};

