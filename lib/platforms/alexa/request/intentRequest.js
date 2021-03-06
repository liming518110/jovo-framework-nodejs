'use strict';

const _ = require('lodash');
const AlexaRequestContextAndSession = require('./alexaRequestContextAndSession').AlexaRequestContextAndSession;

/**
 * Alexa intent request
 */
class IntentRequest extends AlexaRequestContextAndSession {

    /**
     * Constructor
     * @param {*} request object
     */
    constructor(request) {
        super(request);
    }

    /**
     * Adds slot to request
     * @param {string} name
     * @param {string} value
     * @return {IntentRequest}
     */
    addSlot(name, value) {
        let slotObj = {
            name: name,
            value: value,
        };
        if (!_.get(this, 'request.intent.slots')) {
            _.set(this, 'request.intent.slots', {});
        }
        _.set(this, `request.intent.slots.${name}`, slotObj);
        return this;
    }

    /**
     * Returns dialog state of request
     * @return {STARTED|IN_PROGRESS|COMPLETED}
     */
    getDialogState() {
        return _.get(this, 'request.dialogState');
    }

    /**
     * Returns intent name
     * @return {string}
     */
    getIntentName() {
        return _.get(this, 'request.intent.name');
    }

    /**
     * Returns intent confirmation status
     * @return {string}
     */
    getIntentConfirmationStatus() {
        return _.get(this, 'request.intent.confirmationStatus');
    }

    /**
     * Returns slots
     * @return {*}
     */
    getSlots() {
        return _.get(this, 'request.intent.slots');
    }
    /**
     * Sets dialog state of request
     * @param {String} dialogState
     * @return {IntentRequest} intentRequest
     */
    setDialogState(dialogState) {
        _.set(this, 'request.dialogState', dialogState);
        return this;
    }

    /**
     * Sets intent name
     * @param {string} intentName
     * @return {IntentRequest}
     */
    setIntentName(intentName) {
        _.set(this, 'request.intent.name', intentName);
        return this;
    }

    /**
     * Sets intent confirmation status
     * @param {string} intentConfirmationStatus
     * @return {IntentRequest}
     */
    setIntentConfirmationStatus(intentConfirmationStatus) {
        _.set(this, 'request.intent.confirmationStatus', intentConfirmationStatus);
        return this;
    }

    /**
     * Sets slot object
     * @param {*} slots
     * @return {IntentRequest}
     */
    setSlots(slots) {
        _.set(this, 'request.intent.slots', slots);
        return this;
    }

}

module.exports.IntentRequest = IntentRequest;
