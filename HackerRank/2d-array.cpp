#include <bits/stdc++.h>

using namespace std;

// Complete the hourglassSum function below.
int hourglassSum(vector<vector<int>> arr) {
    int maxSum = -999999999;
     
    for (int i = 1; i < 5; i++)
        for (int j = 1; j < 5; j++)
        {
            int temp = arr[i][j];
            cout << temp << " ";
            for (int k = j - 1; k <= j + 1; k++)
            {
                temp += (arr[i-1][k] + arr[i+1][k]);
            }
            if (temp > maxSum)
                maxSum = temp;
                
        }

    return maxSum;
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    vector<vector<int>> arr(6);
    for (int i = 0; i < 6; i++) {
        arr[i].resize(6);

        for (int j = 0; j < 6; j++) {
            cin >> arr[i][j];
        }

        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }

    int result = hourglassSum(arr);

    fout << result << "\n";

    fout.close();

    return 0;
}