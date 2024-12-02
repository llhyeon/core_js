// union type -> 합집합

let str: "name" | "age" | "address";

type CompanyA = {
  companyName: string;
  since: number;
};

type CompanyB = {
  ceo: string;
};

type Company = CompanyA & CompanyB;
type _Company = CompanyA | CompanyB;

const company1: CompanyA = {
  companyName: "8b-studio",
  since: 2022,
};

const company2: _Company = {
  companyName: "apple",
  since: 2010,
  ceo: "steve",
};

// intersection type
