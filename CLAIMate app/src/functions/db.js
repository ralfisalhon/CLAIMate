module.exports = {
  categories: [{
    displayName: "Airlines",
      grounds: [
        "Booking confirmation did not match the order specification",
        "Defective ticket / overbooking",
        "Payment: Charge more than the contract amount",
        "Paid without getting confirmation / ticket"
      ]
    },
    {
      displayName: "Electronic and Appliances",
      grounds: [
        "Unreasonable return / maintenance policy",
        "Faulty / Defective / Broken products",
        "Counterfeit Products",
        "Not of satisfactory quality",
        "Incorrect quantities",
        "Product does not match description",
        "Missing acessories",
        "No delivery at all"
      ]
    },
    {
      displayName: "Food and Beverages",
      grounds: [
        "Perished upon delivery",
        "Passed the expiry date upon delivery",
        "Incorrect quantities",
        "Product does not match description",
        "No delivery at all"
      ]
    },
    {
      displayName: "Apparels",
      grounds: [
        "Unreasonable return / maintenance policy",
        "Faulty / Defective / Broken products",
        "Not of satisfactory quality",
        "Incorrect quantities",
        "Product does not match description",
        "No delivery at all"
      ]
    },
    {
      displayName: "Cosmetics",
      grounds: [
        "Faulty / Defective / Broken products",
        "Perished upon delivery",
        "Passed the expiry date upon delivery",
        "Incorrect quantities",
        "Product does not match description",
        "No delivery at all"
      ]
    }
  ],

  laws: [
    // services
    {
      displayName: "Booking confirmation did not match the order specification",
      itemType: "services",
      groundsSelected: [
        "Booking confirmation did not match the order specification"
      ],
      sectionExtract: "Since my client has already paid in full, my client is entitled to demand a full refund for the service which is not delivered. Under Section 5 of the Supply of Services (Implied Terms) Ordinance of Hong Kong, in a contract for the supply of a service where the supplier is acting in the course of a business, there is an implied term that the supplier will carry out the service with reasonable care and skill."
    },
    {
      displayName: "Defective ticket / overbooking",
      itemType: "services",
      groundsSelected: [
        "Defective ticket / overbooking"
      ],
      sectionExtract: "Since my client has already paid in full, my client is entitled to demand a full refund for the service which is not delivered. Under Section 5 of the Supply of Services (Implied Terms) Ordinance of Hong Kong, in a contract for the supply of a service where the supplier is acting in the course of a business, there is an implied term that the supplier will carry out the service with reasonable care and skill. Under sections 2 and 9 of the Theft Ordinance of Hong Kong, if the seller never had the intention to supply the service or had known that there would not be an available service to provide, the seller may have committed the offence of theft. The sum of money paid by the buyer is considered property stolen by the seller, if the seller did not supply the service."
    },
    {
      displayName: "Payment: Charge more than the contract amount",
      itemType: "services",
      groundsSelected: [
        "Payment: Charge more than the contract amount"
      ],
      sectionExtract: "Since my client has paid in excess of the contractual sum, my client is entitled to demand a full refund of the excess sum. Under sections 2 and 9 of the Theft Ordinance of Hong Kong, if the seller had intentionally taken more money than as agreed under the contract, or had done so negligently but refused to return such sum after having known the circumstances, the seller may have committed the offence of theft. The sum of money paid by the buyer is considered property stolen by the seller."
    },
    {
      displayName: "Unreasonable return / maintenance policy",
      itemType: "services",
      groundsSelected: [
        "Unreasonable return / maintenance policy"
      ],
      sectionExtract: "Under Section 5 and 6 of the Unconscionable Contracts Ordinance, the contract may become unenforceable if, as a result of conduct engaged in by the other party, the consumer was required to comply with conditions that were not reasonably necessary for the protection of the legitimate interests of the other party."
    },

    // goods
    {
      displayName: "Faulty / Perished / Broken / Not working when delivered",
      itemType: "goods",
      groundsSelected: [
        "Faulty / Defective / Broken products",
        "Perished upon delivery",
        "Passed the expiry date upon delivery"
      ],
      sectionExtract: "Under Section 16 of the Sales of Goods Ordinance of Hong Kong, where the seller sells goods in the course of a business, there is an implied condition that the goods supplied under the contract are of merchantable quality. Under Section 15(1) of the Sales of Goods Ordinance of Hong Kong, where there is a contract for the sale of goods by description, there is an implied condition that the goods shall correspond with the description."
    },
    {
      displayName: "Not of satisfactory quality",
      itemType: "goods",
      groundsSelected: [
        "Not of satisfactory quality"
      ],
      sectionExtract: "Under Section 16 of the Sales of Goods Ordinance of Hong Kong, where the seller sells goods in the course of a business, there is an implied condition that the goods supplied under the contract are of merchantable quality. Under Section 15(1) of the Sales of Goods Ordinance of Hong Kong, where there is a contract for the sale of goods by description, there is an implied condition that the goods shall correspond with the description."
    },
    {
      displayName: "No delivery at all",
      itemType: "goods",
      groundsSelected: [
        "No delivery at all"
      ],
      sectionExtract: "Since my client has already paid, my client is entitled to demand a full refund or immediate delivery of goods as stipulated under the contract. Under sections 2 and 9 of the Theft Ordinance of Hong Kong, if the seller never had the intention to supply the advertised goods or, having received money from the purchaser decides not to supply the goods, the seller may have committed the offence of theft. The sum of money paid by the buyer is considered property stolen by the seller, if the seller did not supply the goods."
    },
    {
      displayName: "Paid without getting confirmation / ticket",
      itemType: "goods",
      groundsSelected: [
        "Paid without getting confirmation / ticket"
      ],
      sectionExtract: "Since my client has already paid, my client is entitled to demand a full refund or immediate delivery of goods as stipulated under the contract. Under sections 2 and 9 of the Theft Ordinance of Hong Kong, if the seller never had the intention to supply the advertised goods or, having received money from the purchaser decides not to supply the goods, the seller may have committed the offence of theft. The sum of money paid by the buyer is considered property stolen by the seller, if the seller did not supply the goods."
    },
    {
      displayName: "Product does not match description",
      itemType: "goods",
      groundsSelected: [
        "Product does not match description"
      ],
      sectionExtract: "Under Section 15(1) of the Sales of Goods Ordinance of Hong Kong, where there is a contract for the sale of goods by description, there is an implied condition that the goods shall correspond with the description."
    },
    {
      displayName: "Counterfeit products",
      itemType: "goods",
      groundsSelected: [
        "Counterfeit products"
      ],
      sectionExtract: "Under Section 7(1)(a)(ii) of the Trade Descriptions Ordinance of Hong Kong, it is an offence to supply or offer to supply any goods to which a false trade description is applied. It includes goods that imitate another product but were not made by the manufacturer of the product as originally described in your website."
    },
    {
      displayName: "Incorrect quantities",
      itemType: "goods",
      groundsSelected: [
        "Incorrect quantities"
      ],
      sectionExtract: "Under Section 32(1) of the Sales of Goods Ordinance of Hong Kong, where the seller delivers to the buyer a quantity of goods less than he contracted to sell, the buyer may reject them. My client is entitled to a full refund or an immediate delivery of the correct quantities."
    },
    {
      displayName: "Missing acessories",
      itemType: "goods",
      groundsSelected: [
        "Missing acessories"
      ],
      sectionExtract: "Under Section 32(1) of the Sales of Goods Ordinance of Hong Kong, where the seller delivers to the buyer a quantity of goods less than he contracted to sell, the buyer may reject them. My client is entitled to a full refund or an immediate delivery of the correct quantities."
    }
  ]
}
