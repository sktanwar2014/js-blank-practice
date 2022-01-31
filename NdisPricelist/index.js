import { priceListData } from './priceListData';

export const main = () => {
  // console.log('hello', priceListData);
  const itemNumbers = [
    ...new Set(priceListData.map((d) => d['Support Item Number'])),
  ];
  const splitedItemNumbers = itemNumbers.map((n) => n.split('_'));
  // console.log(splitedItemNumbers);

  const SupportCategoryNumbers = [
    ...new Set(splitedItemNumbers.map((sn) => sn[0])),
  ];
  console.log(SupportCategoryNumbers);

  const ItemsSequenceNumbers = [
    ...new Set(splitedItemNumbers.map((sn) => sn[1])),
  ];
  console.log(ItemsSequenceNumbers);

  const RegistrationGroupNumbers = [
    ...new Set(splitedItemNumbers.map((sn) => sn[2])),
  ];
  console.log(RegistrationGroupNumbers);

  const OutcomeDomain = [...new Set(splitedItemNumbers.map((sn) => sn[3]))];
  console.log(OutcomeDomain);

  const SupportPurpose = [...new Set(splitedItemNumbers.map((sn) => sn[4]))];
  console.log(SupportPurpose);

  // const TTPServices = [...new Set(splitedItemNumbers.map((sn) => sn[5]))];
  // console.log(TTPServices);
};
