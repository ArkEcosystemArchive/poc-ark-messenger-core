import { Container, Logger } from "@arkecosystem/core-interfaces";
import { Handlers } from "@arkecosystem/core-transactions";
import { defaults } from "./defaults";
import { MessageTransactionHandler } from "./handlers";

export const plugin: Container.IPluginDescriptor = {
    pkg: require("../package.json"),
    defaults,
    alias: "message-transaction",
    async register(container: Container.IContainer, options) {
        container
            .resolvePlugin<Logger.ILogger>("logger")
            .info("Registering custom transaction (name: message, typeGroup: 1001, type:101)");
        Handlers.Registry.registerTransactionHandler(MessageTransactionHandler);
    },
    async deregister(container: Container.IContainer, options) {
        container
            .resolvePlugin<Logger.ILogger>("logger")
            .info("Deregistering custom transaction (name: message, typeGroup: 1001, type:101)");
    },
};
