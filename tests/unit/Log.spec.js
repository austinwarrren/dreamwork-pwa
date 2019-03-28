import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import Log from '../../src/views/Log';

describe('Log', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Log);
    });

    describe('clicking the log button', () => {
        beforeEach(() => {
            wrapper
                .find('[data-test="runDate"]')
                .setValue('03/27/2019');

            wrapper
                .find('[data-test="runDistance"]')
                .setValue('2');
            
            wrapper
                .find('[data-test="runLogButton"]')
                .trigger('click');
        });

        it('clears the date field', () => {
            expect(
                wrapper.find('[data-test="runDate"]').element.value
            ).to.equal('');
        });

        it('clears the distance field', () => {
            expect(
                wrapper.find('[data-test="runDistance"]').element.value
            ).to.equal('');
        })
    })
})