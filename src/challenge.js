module.exports = {
    companies,
    employments
};

function companies(data) {

    var allCompanies = data.companies.map(function(comps) {

        var results = {
            name: comps.name,
            employees: [],
        };

        var people = data.people.map(function(peeps) {
            if (peeps.employments.length !== 0) {

                peeps.employments.forEach(function(employment) {
                    if (employment.company_id === comps.id) {

                        var person = {
                            id: peeps.id,
                            first_name: peeps.first_name,
                            last_name: peeps.last_name,
                            title: employment.title
                        };

                        results.employees.push(person);
                    }
                });

            }
        });

        return results;
    });

    console.log(JSON.stringify(allCompanies, null, 2));
    return allCompanies;
}

function employments(data) {

    var results = [];

    var allEmployments = data.companies.map(function(comps) {

        var people = data.people.map(function(peeps) {
            if (peeps.employments.length !== 0) {

                peeps.employments.forEach(function(employment) {
                    if (employment.company_id === comps.id) {

                        var person = {
                            "company_id": comps.id,
                            "company_name": comps.name,
                            "person_id": peeps.id,
                            "person_first_name": peeps.first_name,
                            "person_last_name": peeps.last_name,
                            "title": employment.title
                        };

                        results.push(person);
                    }
                });

            }
        });

    });

    console.log(JSON.stringify(results, null, 2));
    return results;
}
