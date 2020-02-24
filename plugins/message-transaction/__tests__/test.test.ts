import "jest-extended";

import { Managers, Transactions } from "@arkecosystem/crypto";
import { MessageTransactionBuilder } from "../src/builders";
import { MessageTransaction } from "../src/transactions";

Managers.configManager.setFromPreset("testnet");
Managers.configManager.setHeight(2);
Transactions.TransactionRegistry.registerTransactionType(MessageTransaction);

describe("Test builder", () => {
    it("should verify correctly", () => {
        const builder = new MessageTransactionBuilder();
        const tx = builder
            .messageData("SomeMessage")
            .nonce("3")
            .recipientId("AYeceuGa7tTsyG6jgq7X6qKdoXt9iJJKN6")
            .sign("clay harbor enemy utility margin pretty hub comic piece aerobic umbrella acquire");

        expect(tx.build().verified).toBeTrue();
        expect(tx.verify()).toBeTrue();
    });
});
