import { shallowMount } from '@vue/test-utils';
import SengStatistics from '@/components/SengStatistics.vue';

describe('SengStatistics.vue', () => {
  beforeEach(() => {
    // @ts-ignore
    window.performance.getEntries = jest.fn(() => [
      {
        responseStart: 0,
        responseEnd: 500,
        transferSize: 512000,
      },
      {
        responseStart: 0,
        responseEnd: 980,
        transferSize: 1024000,
      },
    ]);
  });
  it('renders the current browser and version', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:67.0) Gecko/20100101 Firefox/67.0');
    const wrapper = shallowMount(SengStatistics, {});
    expect(wrapper.element.querySelector('#browser')!.innerHTML).toMatch('Browser: Firefox - 67.67.0');
  });
});
