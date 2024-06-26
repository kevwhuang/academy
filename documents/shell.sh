# global update
clear;

echo -e "\033[0;33m>>> CLI\033[0m";
cd /Users/kevinhuang/Documents/dev;
sudo find . -name ".DS_Store" -delete;
cd /Users/kevinhuang/Documents/dev/\(archives\)/study/academy;
echo -e "\033[0;36m--------------------";

echo -e "\033[0;33m>>> HOMEBREW\033[0m";
brew update;
brew upgrade;
brew ls;
brew -v;
echo -e "\033[0;36m--------------------";

echo -e "\033[0;33m>>> SHELLS\033[0m";
zsh --version;
bash --version;
echo -e "\033[0;36m--------------------";

echo -e "\033[0;33m>>> NODE\033[0m";
sudo n stable;
node -v;
echo -e "\033[0;36m--------------------";

echo -e "\033[0;33m>>> NPM\033[0m";
npm up;
find /usr/local/lib/node_modules -name ".DS_Store" -delete;
sudo npm up -g;
npm ls -g;
npm -v;
echo -e "\033[0;36m--------------------";

echo -e "\033[0;33m>>> REPOS\033[0m";
git -v;
netlify -v;
gcloud -v;
heroku -v;
echo -e "\033[0;36m--------------------";

echo -e "\033[0;33m>>> NPX\033[0m";
npx dotenv-vault push;
npx jest --config test/jest.config.json;
npx nodemon;
