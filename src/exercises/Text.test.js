import { mount } from '@vue/test-utils';
import Text from './Text';

describe('Text', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Text);
  });

  test('should render the title', () => {
    const expected = 'Hello World!';
    const actual = wrapper.find('.hello-world h1').text();

    expect(actual).toEqual(expected);
  });

  test('should render the computed message', () => {
    const expected = 'euV ot noitcudortnI';
    const actual = wrapper.find('.reverse-message').text();

    expect(actual).toEqual(expected);
  });

  test('should apply the toUpperCase method on upperCaseMessage', () => {
    const expected = 'SHOULD BE UPPERCASE TEXT';
    const actual = wrapper.find('.to-uppercase').text();

    expect(actual).toEqual(expected);
  });

  test('should apply styles', () => {
    expect(wrapper.contains('#styled-red.red')).toBeTruthy();

    wrapper.setData({ applyClass: false });

    expect(wrapper.contains('#styled-red.red')).toBeFalsy();
  });

  test('should conditionally render with v-if', () => {
    expect(wrapper.contains('#should-render')).toBeFalsy();

    wrapper.setData({ shouldRender: true });

    expect(wrapper.contains('#should-render')).toBeTruthy();
  });

  test('should render a list with v-for', () => {
    expect(wrapper.find('ul').findAll('li').length).toEqual(3);
  });

  test('should increment the count when pressing on the button', () => {
    expect(wrapper.vm.buttonClickCount).toEqual(0);

    wrapper.find('button').trigger('click');
    wrapper.find('button').trigger('click');

    expect(wrapper.vm.buttonClickCount).toEqual(2);
  });

  test('should link input to inputText data key using v-model', () => {
    wrapper.setData({ inputText: 'some text' });
    expect(wrapper.find('input').element.value).toEqual('some text');
  });
});
