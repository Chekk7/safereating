import './index.css';

const bannedFoods = [
  {
    food: 'Skittles',
    country: 'European Union',
    reason: 'Contains Yellow 5, Yellow 6, and titanium dioxide. EU banned titanium dioxide due to genotoxicity concerns.',
    study: 'EFSA (2021). "Safety assessment of titanium dioxide (E171)." EFSA Journal, 19(5), e06585. Funded by EFSA (independent EU agency). No human genotoxicity confirmed, but animal studies showed potential DNA damage.',
    studyLink: 'https://doi.org/10.2903/j.efsa.2021.6585'
  },
  {
    food: 'Raw Milk',
    country: 'United States',
    reason: 'Unpasteurized milk risks bacterial contamination (E. coli, Listeria).',
    study: 'CDC (2015). "Outbreaks of illness associated with raw milk." Morbidity and Mortality Weekly Report, 64(41), 1161-1166. Funded by CDC (US public health). Human outbreaks linked to pathogens in raw milk.',
    studyLink: 'https://www.cdc.gov/mmwr/preview/mmwrhtml/mm6441a1.htm'
  },
  {
    food: 'Kinder Surprise Eggs',
    country: 'United States',
    reason: 'Non-edible toys inside pose choking hazards (FDA regulation).',
    study: 'No direct study; based on FDA’s 1938 Food, Drug, and Cosmetic Act enforcement. No funding bias (regulatory).',
    studyLink: 'https://www.fda.gov/regulatory-information/laws-enforced-fda/federal-food-drug-and-cosmetic-act'
  },
  {
    food: 'American Pork',
    country: 'European Union, China',
    reason: 'Ractopamine use linked to animal stress and potential human cardiovascular risks.',
    study: 'Tang et al. (2016). "Ractopamine residues in pork." Food Additives & Contaminants, 33(2), 159-166. Funded by Chinese Ministry of Science (government, potential bias). Animal studies showed residues; human risk unclear.',
    studyLink: 'https://doi.org/10.1080/19440049.2015.1128589'
  },
  {
    food: 'Haggis',
    country: 'United States',
    reason: 'Sheep lung banned by USDA due to contamination risks.',
    study: 'No peer-reviewed study; USDA regulation (9 CFR 310.16). No funding bias (regulatory).',
    studyLink: 'https://www.ecfr.gov/current/title-9/chapter-III/subchapter-A/part-310/section-310.16'
  }
];

function BannedFoods() {
  return (
    <div className='mt-6'>
      <h2 className='text-xl sm:text-2xl font-semibold'>Banned Foods Index</h2>
      <p className='text-sm sm:text-base mt-1'>Foods banned in the US and abroad with reasons and studies.</p>
      <div className='overflow-x-auto mt-4'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-gray-100'>
              <th className='p-2 sm:p-3 text-sm sm:text-base font-medium'>Food</th>
              <th className='p-2 sm:p-3 text-sm sm:text-base font-medium'>Country</th>
              <th className='p-2 sm:p-3 text-sm sm:text-base font-medium'>Reason for Ban</th>
              <th className='p-2 sm:p-3 text-sm sm:text-base font-medium'>Study/Funding</th>
            </tr>
          </thead>
          <tbody>
            {bannedFoods.map((item, index) => (
              <tr key={index} className='border-b'>
                <td className='p-2 sm:p-3 text-sm sm:text-base'>{item.food}</td>
                <td className='p-2 sm:p-3 text-sm sm:text-base'>{item.country}</td>
                <td className='p-2 sm:p-3 text-sm sm:text-base'>{item.reason}</td>
                <td className='p-2 sm:p-3 text-sm sm:text-base'>
                  <a href={item.studyLink} target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                    {item.study}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BannedFoods;
