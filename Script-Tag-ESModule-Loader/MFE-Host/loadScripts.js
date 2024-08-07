 function registerAndLoad(dependencies = [], bundle) {

    let loadingPromises = [];

    function loadApp(url, success, error) {

        function defaultResolve() {
            // handle onload
        }

        function defaultReject() {
            // handle onerror
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script')
            script.src = url;
            script.id = 'script-module';
            script.onload = resolve || defaultResolve;
            script.onerror = reject || defaultReject;
            script.textContent = 'alert(1)';
            document.head.appendChild(script)
        });
    }

    async function registerAndLoad(dependencies, bundle) {
        dependencies.forEach((moduleUrl) => {
            loadingPromises.push(
                loadApp(moduleUrl)
            );
        });
        Promise.all(dependencies)
        .then(function(results) {
            // each result has a .value and a corresponding .source property
            loadApp(bundle);
        })    
        .catch(function () {
            console.log("Promise Rejected");
        });
    
    }

    registerAndLoad(dependencies, bundle);

}