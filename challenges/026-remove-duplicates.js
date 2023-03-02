function removeDuplicates(nums) {
    const len = nums.length;
    let $, counter = 0;

    for (let i = 0; i < len; i++) {
        if (nums[i] != $) {
            nums[counter] = nums[i];
            $ = nums[i];
            counter++;
        }
    }

    nums.splice(counter, len);
    return nums; // remove
}

module.exports = removeDuplicates;
