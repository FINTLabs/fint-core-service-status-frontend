function getData() {
    return [{
        "adapterId": "https://vigoiks.no/fintlabs-no/utdanning/vurdering/skeleton/beta",
        "capabilityEntities": [
            {
                "domainName": "utdanning",
                "packageName": "vurdering",
                "resourceName": "fravarsoversikt",
                "fullSyncIntervalInDays": 7,
                "deltaSyncInterval": "IMMEDIATE"
            },
            {
                "domainName": "utdanning",
                "packageName": "vurdering",
                "resourceName": "fravar",
                "fullSyncIntervalInDays": 7,
                "deltaSyncInterval": "IMMEDIATE"
            }
        ],
        "orgId": "fintlabs.no",
        "username": "core2-test@adapter.fintlabs.no",
        "heartbeatIntervalInMinutes": 1,
        "time": 1656593281801,
        "lastSeen": 1656594665203,
        "considerHealthy": false
    }];
}

export default getData