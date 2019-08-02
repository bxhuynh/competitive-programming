#include bitsstdc++.h

using namespace std;

vectorstring split_string(string);

 Complete the rotLeft function below.
vectorint rotLeft(vectorint a, int d) {
    vector int temp;
    for (int i = d; i  a.size(); i++)
        temp.push_back(a[i]);
    for (int i = 0; i  d; i++)
        temp.push_back(a[i]);
    return temp;
}

int main()
{
    ofstream fout(getenv(OUTPUT_PATH));

    string nd_temp;
    getline(cin, nd_temp);

    vectorstring nd = split_string(nd_temp);

    int n = stoi(nd[0]);

    int d = stoi(nd[1]);

    string a_temp_temp;
    getline(cin, a_temp_temp);

    vectorstring a_temp = split_string(a_temp_temp);

    vectorint a(n);

    for (int i = 0; i  n; i++) {
        int a_item = stoi(a_temp[i]);

        a[i] = a_item;
    }

    vectorint result = rotLeft(a, d);

    for (int i = 0; i  result.size(); i++) {
        fout  result[i];

        if (i != result.size() - 1) {
            fout   ;
        }
    }

    fout  n;

    fout.close();

    return 0;
}

vectorstring split_string(string input_string) {
    stringiterator new_end = unique(input_string.begin(), input_string.end(), [] (const char &x, const char &y) {
        return x == y and x == ' ';
    });

    input_string.erase(new_end, input_string.end());

    while (input_string[input_string.length() - 1] == ' ') {
        input_string.pop_back();
    }

    vectorstring splits;
    char delimiter = ' ';

    size_t i = 0;
    size_t pos = input_string.find(delimiter);

    while (pos != stringnpos) {
        splits.push_back(input_string.substr(i, pos - i));

        i = pos + 1;
        pos = input_string.find(delimiter, i);
    }

    splits.push_back(input_string.substr(i, min(pos, input_string.length()) - i + 1));

    return splits;
}
