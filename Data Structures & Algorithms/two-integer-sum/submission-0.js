class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const resultMap = new Map()
        for (let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i];

            if (resultMap.has(compliment)) {
                return [resultMap.get(compliment), i]
            }

            resultMap.set(nums[i], i)
        }

        return []
    }
}
